<?php

namespace App\Controller;

use App\Entity\Experience;
use App\Entity\GenreCine;
use App\Form\ExperienceType;
use App\Entity\ImageExperience;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class BackOfficeController extends AbstractController
{

// */
// * @Route("/admin")
// */

    public function showAll(): Response
    {

        $allExperience = $this->getDoctrine()->getRepository(Experience::class)->findAll();
        $allExperience = $this->getDoctrine()->getRepository(Experience::class)->findAll();
        
        return $this->render('backoffice/showAll.html.twig', [
           'allExperience' => $allExperience]);

    }

    public function showAllApi(): Response
    {

        $allExperience = $this->getDoctrine()->getRepository(Experience::class)->findAll();
        $experiences = [];
        //dump($allExperience);

        $allGenre = $this->getDoctrine()->getRepository(GenreCine::class)->findAll();
        $genres = [];
        //dump($genre);

        $allImage = $this->getDoctrine()->getRepository(ImageExperience::class)->findAll();
        $images = [];
        //dump($images);

        foreach($allExperience as $allExp) {
            $exp = [
                "id"=>$allExp->getId(),
                "theme"=>$allExp->getTheme(),
                "titreExperience"=>$allExp->getTitreExperience(),
                "descriptionExperience"=>$allExp->getDescriptionExperience(),
                "paysDestination"=>$allExp->getPaysDestination(),
                "villeDestination"=>$allExp->getVilleDestination(),
                "dateDepart"=>$allExp->getDateDepart(),
                "dateRetour"=>$allExp->getDateRetour(),
                "genreCine"=>$allExp->getGenreCine()->getGenre(),
                "imageExp"=>$allExp->getImagesExperience()[0]->getUrlImage()
            ];
            array_push($experiences, $exp);

        }

        foreach($allGenre as $genre) {
            $genreIndex = [
                "id"=>$genre->getId(),
                "genre"=>$genre->getGenre()
            ];
            array_push($genres, $genreIndex);

        }
        
        foreach($allImage as $image) {
            $imageIndex = [
                "id"=>$image->getId(),
                "url_image"=>$image->getUrlImage()
            ];
            array_push($images, $imageIndex);

        }
        //dump($experiences);

        $completeResult = [
            "experiences" => $experiences,
            "genres"=> $genres,
            "images"=> $images
        ];

        return new JsonResponse($completeResult);

    }

    public function create(Request $request)
    {

        $experience = new Experience();
        $form = $this->createForm(ExperienceType::class, $experience);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $images = $form->get('ImageExperience')->getData();

            foreach ($images as $image) {
                // on genere un nouveau nom de fichier
                $fichier = md5(uniqid()). '.' .$image->guessExtension();

                // on copie le fichier dans le dossier image
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );

                // On stocke l'image dans la base de donnée
                $img = new ImageExperience();
                $img->setUrlImage($fichier);
                $experience->addImagesExperience($img);
            }


            $em = $this->getDoctrine()->getManager();
            $em->persist($experience);
            $em->flush();

            $this->addFlash('success', 'Votre experience à bien été ajouté ');
            return $this->redirect($this->generateUrl('backoffice_showall'));
        }
        return $this->render('backoffice/create.html.twig', ["form" => $form->createView()]);
    }

   
    
    public function edit(Request $request, $id): Response
    {
        $experience = $this->getDoctrine()->getRepository(Experience::class)->find($id);
        $form = $this->createForm(ExperienceType::class, $experience);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // on recupere les images transmises
            $images = $form->get('ImageExperience')->getData();

            // on boucle sur les images 
            foreach ($images as $image) {
                // on genere un nouveau nom de fichier
                $fichier = md5(uniqid()). '.' .$image->guessExtension();

                // on copie le fichier dans le dossier image
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );

                // On stocke l'image dans la base de donnée
                $img = new ImageExperience();
                $img->setUrlImage($fichier);
                $experience->addImagesExperience($img);
            }
 
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'Votre modification à bien été pris en compte');
            // return $this->redirectToRoute('backoffice_showall');
        }

        return $this->render('backoffice/edit.html.twig', [
            'experience' => $experience,
            'form' => $form->createView(),
        ]);
    }

    
    public function delete($id)
    {
        $em = $this->getDoctrine()->getManager();

        $content = $em->getRepository(Experience::class)->find($id);

        $em->remove($content);
        $em->flush();

        $this->addFlash('success', 'Votre experience à bien été supprimer');
        return $this->redirect($this->generateUrl("backoffice_showall"));
    }

    
    public function deleteImage($id){
        $em = $this->getDoctrine()->getManager();

        $image = $em->getRepository(ImageExperience::class)->find($id);

        $em->remove($image);
        $em->flush();

        $this->addFlash('success', 'Super, ne vous inquiétez pas votre image à bien été supprimer ');
        return $this->redirect($this->generateUrl("backoffice_showall"));

        }

}