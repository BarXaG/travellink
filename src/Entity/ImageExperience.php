<?php

namespace App\Entity;

use App\Repository\ImageExperienceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImageExperienceRepository::class)
 */
class ImageExperience
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
    private $urlImage;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $typeImage;

    /**
     * @ORM\ManyToOne(targetEntity=Experience::class, inversedBy="imagesExperience", cascade={"persist"})
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

    public function getUrlImage(): ?string
    {
        return $this->urlImage;
    }

    public function setUrlImage(string $urlImage): self
    {
        $this->urlImage = $urlImage;

        return $this;
    }

    public function getTypeImage(): ?string
    {
        return $this->typeImage;
    }

    public function setTypeImage(string $typeImage): self
    {
        $this->typeImage = $typeImage;

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
