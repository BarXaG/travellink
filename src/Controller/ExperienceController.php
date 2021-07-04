<?php

namespace App\Controller;

use App\Entity\Etape;
use App\Entity\Tarif;
use App\Entity\Formule;
use App\Entity\Activite;
use App\Entity\Experience;
use App\Entity\ImageExperience;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ExperienceController extends AbstractController
{
  public function showAll(){
    return $this->render('experience/catalogue.html.twig');
  }



  public function show($id)
  {
    $experience = $this->getDoctrine()->getRepository(Experience::class)->find($id);
    $formules = $this->getDoctrine()->getRepository(Formule::class)->findAll();
    $banniereExperience = $this->getDoctrine()->getRepository(ImageExperience::class)->findBanniereExperience($id);
    $imageProfilExperience = $this->getDoctrine()->getRepository(ImageExperience::class)->findImageProfilExperience($id);
    $vignettesExperience = $this->getDoctrine()->getRepository(ImageExperience::class)->findVignettesExperience($id);
    $tarifBasic = $this->getDoctrine()->getRepository(Tarif::class)->findTarifBasic($id);
    $tarifMedium = $this->getDoctrine()->getRepository(Tarif::class)->findTarifMedium($id);
    $tarifPremium = $this->getDoctrine()->getRepository(Tarif::class)->findTarifPremium($id);
    $etapeJour1 = $this->getDoctrine()->getRepository(Etape::class)->findEtapeJour1($id);
    $etapeJour2 = $this->getDoctrine()->getRepository(Etape::class)->findEtapeJour2($id);
    $etapeJour3 = $this->getDoctrine()->getRepository(Etape::class)->findEtapeJour3($id);
    $activitesBasicJour1 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesBasicJour1($id);
    $activitesMediumJour1 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesMediumJour1($id);
    $activitesPremiumJour1 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesPremiumJour1($id);
    $activitesBasicJour2 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesBasicJour2($id);
    $activitesMediumJour2 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesMediumJour2($id);
    $activitesPremiumJour2 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesPremiumJour2($id);
    $activitesBasicJour3 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesBasicJour3($id);
    $activitesMediumJour3 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesMediumJour3($id);
    $activitesPremiumJour3 = $this->getDoctrine()->getRepository(Activite::class)->findActivitesPremiumJour3($id);

    return $this->render('experience/experience.html.twig', [
        'experience' => $experience,
        'formules' => $formules,
        'banniereExperience' => $banniereExperience,
        'imageProfilExperience' => $imageProfilExperience,
        'vignettesExperience' => $vignettesExperience,
        'tarifBasic' => $tarifBasic,
        'tarifMedium' => $tarifMedium,
        'tarifPremium' => $tarifPremium,
        'etapeJour1' => $etapeJour1,
        'etapeJour2' => $etapeJour2,
        'etapeJour3' => $etapeJour3,
        'activitesBasicJour1' => $activitesBasicJour1,
        'activitesMediumJour1' => $activitesMediumJour1,
        'activitesPremiumJour1' => $activitesPremiumJour1,
        'activitesBasicJour2' => $activitesBasicJour2,
        'activitesMediumJour2' => $activitesMediumJour2,
        'activitesPremiumJour2' => $activitesPremiumJour2,
        'activitesBasicJour3' => $activitesBasicJour3,
        'activitesMediumJour3' => $activitesMediumJour3,
        'activitesPremiumJour3' => $activitesPremiumJour3,
    ]);
  }
}