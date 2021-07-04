<?php

namespace App\Entity;

use App\Repository\ExperienceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExperienceRepository::class)
 */
class Experience
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
    private $theme;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titreExperience;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descriptionExperience;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $villeDestination;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $paysDestination;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $latitudeDestination;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $longitudeDestination;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typeSejour;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDepart;

    /**
     * @ORM\Column(type="date")
     */
    private $dateRetour;

    /**
     * @ORM\OneToMany(targetEntity=Etape::class, mappedBy="experience", orphanRemoval=true)
     */
    private $etapes;

    /**
     * @ORM\ManyToOne(targetEntity=GenreCine::class, inversedBy="experiences")
     * @ORM\JoinColumn(nullable=false)
     */
    private $genreCine;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="experience", orphanRemoval=true)
     */
    private $avis;

    /**
     * @ORM\OneToMany(targetEntity=Commande::class, mappedBy="experience")
     */
    private $commandes;

    /**
     * @ORM\OneToMany(targetEntity=Tarif::class, mappedBy="experience", orphanRemoval=true)
     */
    private $tarifs;

    /**
     * @ORM\OneToMany(targetEntity=ImageExperience::class, mappedBy="experience", orphanRemoval=true, cascade={"persist"})
     */
    private $imagesExperience;

    public function __construct()
    {
        $this->etapes = new ArrayCollection();
        $this->avis = new ArrayCollection();
        $this->commandes = new ArrayCollection();
        $this->tarifs = new ArrayCollection();
        $this->imagesExperience = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(string $theme): self
    {
        $this->theme = $theme;

        return $this;
    }

    public function getTitreExperience(): ?string
    {
        return $this->titreExperience;
    }

    public function setTitreExperience(string $titreExperience): self
    {
        $this->titreExperience = $titreExperience;

        return $this;
    }

    public function getDescriptionExperience(): ?string
    {
        return $this->descriptionExperience;
    }

    public function setDescriptionExperience(?string $descriptionExperience): self
    {
        $this->descriptionExperience = $descriptionExperience;

        return $this;
    }

    public function getVilleDestination(): ?string
    {
        return $this->villeDestination;
    }

    public function setVilleDestination(?string $villeDestination): self
    {
        $this->villeDestination = $villeDestination;

        return $this;
    }

    public function getPaysDestination(): ?string
    {
        return $this->paysDestination;
    }

    public function setPaysDestination(string $paysDestination): self
    {
        $this->paysDestination = $paysDestination;

        return $this;
    }

    public function getLatitudeDestination(): ?float
    {
        return $this->latitudeDestination;
    }

    public function setLatitudeDestination(?float $latitudeDestination): self
    {
        $this->latitudeDestination = $latitudeDestination;

        return $this;
    }

    public function getLongitudeDestination(): ?float
    {
        return $this->longitudeDestination;
    }

    public function setLongitudeDestination(?float $longitudeDestination): self
    {
        $this->longitudeDestination = $longitudeDestination;

        return $this;
    }

    public function getTypeSejour(): ?string
    {
        return $this->typeSejour;
    }

    public function setTypeSejour(string $typeSejour): self
    {
        $this->typeSejour = $typeSejour;

        return $this;
    }

    public function getDateDepart(): ?\DateTimeInterface
    {
        return $this->dateDepart;
    }

    public function setDateDepart(\DateTimeInterface $dateDepart): self
    {
        $this->dateDepart = $dateDepart;

        return $this;
    }

    public function getDateRetour(): ?\DateTimeInterface
    {
        return $this->dateRetour;
    }

    public function setDateRetour(\DateTimeInterface $dateRetour): self
    {
        $this->dateRetour = $dateRetour;

        return $this;
    }

    /**
     * @return Collection|Etape[]
     */
    public function getEtapes(): Collection
    {
        return $this->etapes;
    }

    public function addEtape(Etape $etape): self
    {
        if (!$this->etapes->contains($etape)) {
            $this->etapes[] = $etape;
            $etape->setExperience($this);
        }

        return $this;
    }

    public function removeEtape(Etape $etape): self
    {
        if ($this->etapes->removeElement($etape)) {
            // set the owning side to null (unless already changed)
            if ($etape->getExperience() === $this) {
                $etape->setExperience(null);
            }
        }

        return $this;
    }

    public function getGenreCine(): ?GenreCine
    {
        return $this->genreCine;
    }

    public function setGenreCine(?GenreCine $genreCine): self
    {
        $this->genreCine = $genreCine;

        return $this;
    }

    /**
     * @return Collection|Avis[]
     */
    public function getAvis(): Collection
    {
        return $this->avis;
    }

    public function addAvi(Avis $avi): self
    {
        if (!$this->avis->contains($avi)) {
            $this->avis[] = $avi;
            $avi->setExperience($this);
        }

        return $this;
    }

    public function removeAvi(Avis $avi): self
    {
        if ($this->avis->removeElement($avi)) {
            // set the owning side to null (unless already changed)
            if ($avi->getExperience() === $this) {
                $avi->setExperience(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Commande[]
     */
    public function getCommandes(): Collection
    {
        return $this->commandes;
    }

    public function addCommande(Commande $commande): self
    {
        if (!$this->commandes->contains($commande)) {
            $this->commandes[] = $commande;
            $commande->setExperience($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            // set the owning side to null (unless already changed)
            if ($commande->getExperience() === $this) {
                $commande->setExperience(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Tarif[]
     */
    public function getTarifs(): Collection
    {
        return $this->tarifs;
    }

    public function addTarif(Tarif $tarif): self
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs[] = $tarif;
            $tarif->setExperience($this);
        }

        return $this;
    }

    public function removeTarif(Tarif $tarif): self
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getExperience() === $this) {
                $tarif->setExperience(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ImageExperience[]
     */
    public function getImagesExperience(): Collection
    {
        return $this->imagesExperience;
    }

    public function addImagesExperience(ImageExperience $imagesExperience): self
    {
        if (!$this->imagesExperience->contains($imagesExperience)) {
            $this->imagesExperience[] = $imagesExperience;
            $imagesExperience->setExperience($this);
        }

        return $this;
    }

    public function removeImagesExperience(ImageExperience $imagesExperience): self
    {
        if ($this->imagesExperience->removeElement($imagesExperience)) {
            // set the owning side to null (unless already changed)
            if ($imagesExperience->getExperience() === $this) {
                $imagesExperience->setExperience(null);
            }
        }

        return $this;
    }
}
