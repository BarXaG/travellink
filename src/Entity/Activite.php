<?php

namespace App\Entity;

use App\Repository\ActiviteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ActiviteRepository::class)
 */
class Activite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titreActivite;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lieuActivite;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $categorieActivite;

    /**
     * @ORM\ManyToOne(targetEntity=Formule::class, inversedBy="activites")
     * @ORM\JoinColumn(nullable=false)
     */
    private $formule;

    /**
     * @ORM\ManyToOne(targetEntity=Etape::class, inversedBy="activites")
     * @ORM\JoinColumn(nullable=false)
     */
    private $etape;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreActivite(): ?string
    {
        return $this->titreActivite;
    }

    public function setTitreActivite(string $titreActivite): self
    {
        $this->titreActivite = $titreActivite;

        return $this;
    }

    public function getLieuActivite(): ?string
    {
        return $this->lieuActivite;
    }

    public function setLieuActivite(?string $lieuActivite): self
    {
        $this->lieuActivite = $lieuActivite;

        return $this;
    }

    public function getCategorieActivite(): ?string
    {
        return $this->categorieActivite;
    }

    public function setCategorieActivite(?string $categorieActivite): self
    {
        $this->categorieActivite = $categorieActivite;

        return $this;
    }

    public function getFormule(): ?Formule
    {
        return $this->formule;
    }

    public function setFormule(?Formule $formule): self
    {
        $this->formule = $formule;

        return $this;
    }

    public function getEtape(): ?Etape
    {
        return $this->etape;
    }

    public function setEtape(?Etape $etape): self
    {
        $this->etape = $etape;

        return $this;
    }
}
