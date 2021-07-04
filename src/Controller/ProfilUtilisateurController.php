<?php

namespace App\Controller;

use App\Entity\Utilisateur;
use App\Form\UtilisateurType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;

class ProfilUtilisateurController extends AbstractController
{
    /**
     * @Route("/utilisateur", name="utilisateur")
     */
    public function index(): Response
    {
        return $this->render('profil_utilisateur/infos.html.twig', [
            'controller_name' => 'ProfilUtilisateurController',
        ]);
    }

    public function show($id)
    {
        $userInfos = $this->getDoctrine()->getRepository(Utilisateur::class)->find($id);

        return $this->render('profil_utilisateur/infos.html.twig', [
            'userInfos' => $userInfos,
        ]);
    }

    public function edit($id, Request $request, UserPasswordEncoderInterface $passwordEncoder){
        $em= $this->getDoctrine()->getManager();
        $userInfos = $em->getRepository(Utilisateur::class)->find($id);

        $form= $this->createForm(UtilisateurType::class, $userInfos);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $userInfos->setPassword($passwordEncoder->encodePassword($userInfos, $userInfos->getPassword()));

            $em->persist($userInfos);
            $em->flush();
    }
    return $this->render('profil_utilisateur/infos.html.twig',[
        'userInfos' => $userInfos,
        "form" => $form->createView()
    ]);
    }
}