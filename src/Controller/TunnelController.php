<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TunnelController extends AbstractController
{
    /**
     * @Route("/tunnel", name="tunnel")
     */
    public function index(): Response
    {
        return $this->render('tunnel/index.html.twig', [
            'controller_name' => 'TunnelController',
        ]);
    }
}
