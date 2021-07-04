<?php

namespace App\Controller;

use App\Entity\Tarif;
use App\Entity\Experience;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{

    public function index(): Response
    {   
        return $this->render('index.html.twig');
    }

    public function showLastArticles()
    {
        $lastArticles = $this->getDoctrine()->getRepository(Experience::class)->findBy([],["dateDepart" => "DESC"], 15, 0);
        
        $lastArticlesFares = $this->getDoctrine()->getRepository(Tarif::class)->findBy([
            "formule" => "1"
            ]);

        return $this->render('index.html.twig', [
            'lastArticles' => $lastArticles,
            'lastArticlesFares' => $lastArticlesFares,
        ]);

    }
}