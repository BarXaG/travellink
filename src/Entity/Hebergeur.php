<?php

namespace App\Entity;

use App\Repository\HebergeurRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HebergeurRepository::class)
 */
class Hebergeur
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
    private $pseudoHebergeur;

    /**
     * @ORM\Column(type="date")
     */
    private $dateNaissanceHebergeur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sexeHebergeur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $professionHebergeur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $villeHebergeur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $paysHebergeur;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbHebergementsEffectues;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbExperiencesVecues;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lienCouchSurfing;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudoHebergeur(): ?string
    {
        return $this->pseudoHebergeur;
    }

    public function setPseudoHebergeur(string $pseudoHebergeur): self
    {
        $this->pseudoHebergeur = $pseudoHebergeur;

        return $this;
    }

    public function getDateNaissanceHebergeur(): ?\DateTimeInterface
    {
        return $this->dateNaissanceHebergeur;
    }

    public function setDateNaissanceHebergeur(\DateTimeInterface $dateNaissanceHebergeur): self
    {
        $this->dateNaissanceHebergeur = $dateNaissanceHebergeur;

        return $this;
    }

    public function getSexeHebergeur(): ?string
    {
        return $this->sexeHebergeur;
    }

    public function setSexeHebergeur(?string $sexeHebergeur): self
    {
        $this->sexeHebergeur = $sexeHebergeur;

        return $this;
    }

    public function getProfessionHebergeur(): ?string
    {
        return $this->professionHebergeur;
    }

    public function setProfessionHebergeur(?string $professionHebergeur): self
    {
        $this->professionHebergeur = $professionHebergeur;

        return $this;
    }

    public function getVilleHebergeur(): ?string
    {
        return $this->villeHebergeur;
    }

    public function setVilleHebergeur(string $villeHebergeur): self
    {
        $this->villeHebergeur = $villeHebergeur;

        return $this;
    }

    public function getPaysHebergeur(): ?string
    {
        return $this->paysHebergeur;
    }

    public function setPaysHebergeur(string $paysHebergeur): self
    {
        $this->paysHebergeur = $paysHebergeur;

        return $this;
    }

    public function getNbHebergementsEffectues(): ?int
    {
        return $this->nbHebergementsEffectues;
    }

    public function setNbHebergementsEffectues(?int $nbHebergementsEffectues): self
    {
        $this->nbHebergementsEffectues = $nbHebergementsEffectues;

        return $this;
    }

    public function getNbExperiencesVecues(): ?int
    {
        return $this->nbExperiencesVecues;
    }

    public function setNbExperiencesVecues(?int $nbExperiencesVecues): self
    {
        $this->nbExperiencesVecues = $nbExperiencesVecues;

        return $this;
    }

    public function getLienCouchSurfing(): ?string
    {
        return $this->lienCouchSurfing;
    }

    public function setLienCouchSurfing(?string $lienCouchSurfing): self
    {
        $this->lienCouchSurfing = $lienCouchSurfing;

        return $this;
    }
}
