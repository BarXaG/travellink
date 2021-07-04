<?php

namespace App\Entity;

use App\Repository\EtapeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EtapeRepository::class)
 */
class Etape
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $jourEtape;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quartierEtape;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $villeEtape;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $paysEtape;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $latitudeEtape;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $longitudeEtape;

    /**
     * @ORM\OneToMany(targetEntity=Activite::class, mappedBy="etape", orphanRemoval=true)
     */
    private $activites;

    /**
     * @ORM\ManyToOne(targetEntity=Experience::class, inversedBy="etapes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $experience;

    public function __construct()
    {
        $this->activites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJourEtape(): ?int
    {
        return $this->jourEtape;
    }

    public function setJourEtape(int $jourEtape): self
    {
        $this->jourEtape = $jourEtape;

        return $this;
    }

    public function getQuartierEtape(): ?string
    {
        return $this->quartierEtape;
    }

    public function setQuartierEtape(?string $quartierEtape): self
    {
        $this->quartierEtape = $quartierEtape;

        return $this;
    }

    public function getVilleEtape(): ?string
    {
        return $this->villeEtape;
    }

    public function setVilleEtape(string $villeEtape): self
    {
        $this->villeEtape = $villeEtape;

        return $this;
    }

    public function getPaysEtape(): ?string
    {
        return $this->paysEtape;
    }

    public function setPaysEtape(string $paysEtape): self
    {
        $this->paysEtape = $paysEtape;

        return $this;
    }

    public function getLatitudeEtape(): ?float
    {
        return $this->latitudeEtape;
    }

    public function setLatitudeEtape(?float $latitudeEtape): self
    {
        $this->latitudeEtape = $latitudeEtape;

        return $this;
    }

    public function getLongitudeEtape(): ?float
    {
        return $this->longitudeEtape;
    }

    public function setLongitudeEtape(?float $longitudeEtape): self
    {
        $this->longitudeEtape = $longitudeEtape;

        return $this;
    }

    /**
     * @return Collection|Activite[]
     */
    public function getActivites(): Collection
    {
        return $this->activites;
    }

    public function addActivite(Activite $activite): self
    {
        if (!$this->activites->contains($activite)) {
            $this->activites[] = $activite;
            $activite->setEtape($this);
        }

        return $this;
    }

    public function removeActivite(Activite $activite): self
    {
        if ($this->activites->removeElement($activite)) {
            // set the owning side to null (unless already changed)
            if ($activite->getEtape() === $this) {
                $activite->setEtape(null);
            }
        }

        return $this;
    }

    public function getExperience(): ?Experience
    {
        return $this->experience;
    }

    public function setExperience(?Experience $experience): self
    {
        $this->experience = $experience;

        return $this;
    }
}
