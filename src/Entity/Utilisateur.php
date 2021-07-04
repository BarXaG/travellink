<?php

namespace App\Entity;

use App\Repository\UtilisateurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UtilisateurRepository::class)
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class Utilisateur implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pseudoUtilisateur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $urlPhoto;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sexeUtilisateur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $inscriptionNewsletter;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateNaissanceUtilisateur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numPieceIdentite;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateExpiration;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $cp;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pays;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbPointsFidelite;

    /**
     * @ORM\ManyToMany(targetEntity=GenreCine::class, mappedBy="utilisateur")
     */
    private $genresCine;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="utilisateur")
     */
    private $avis;

    /**
     * @ORM\OneToMany(targetEntity=Commande::class, mappedBy="utilisateur")
     */
    private $commandes;

    public function __construct()
    {
        $this->genresCine = new ArrayCollection();
        $this->avis = new ArrayCollection();
        $this->commandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPseudoUtilisateur(): ?string
    {
        return $this->pseudoUtilisateur;
    }

    public function setPseudoUtilisateur(string $pseudoUtilisateur): self
    {
        $this->pseudoUtilisateur = $pseudoUtilisateur;

        return $this;
    }

    public function getUrlPhoto(): ?string
    {
        return $this->urlPhoto;
    }

    public function setUrlPhoto(?string $urlPhoto): self
    {
        $this->urlPhoto = $urlPhoto;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getSexeUtilisateur(): ?string
    {
        return $this->sexeUtilisateur;
    }

    public function setSexeUtilisateur(?string $sexeUtilisateur): self
    {
        $this->sexeUtilisateur = $sexeUtilisateur;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getInscriptionNewsletter(): ?bool
    {
        return $this->inscriptionNewsletter;
    }

    public function setInscriptionNewsletter(?bool $inscriptionNewsletter): self
    {
        $this->inscriptionNewsletter = $inscriptionNewsletter;

        return $this;
    }

    public function getDateNaissanceUtilisateur(): ?\DateTimeInterface
    {
        return $this->dateNaissanceUtilisateur;
    }

    public function setDateNaissanceUtilisateur(\DateTimeInterface $dateNaissanceUtilisateur): self
    {
        $this->dateNaissanceUtilisateur = $dateNaissanceUtilisateur;

        return $this;
    }

    public function getNumPieceIdentite(): ?string
    {
        return $this->numPieceIdentite;
    }

    public function setNumPieceIdentite(?string $numPieceIdentite): self
    {
        $this->numPieceIdentite = $numPieceIdentite;

        return $this;
    }

    public function getDateExpiration(): ?\DateTimeInterface
    {
        return $this->dateExpiration;
    }

    public function setDateExpiration(?\DateTimeInterface $dateExpiration): self
    {
        $this->dateExpiration = $dateExpiration;

        return $this;
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(?string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return $this->adresse2;
    }

    public function setAdresse2(?string $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->cp;
    }

    public function setCp(?string $cp): self
    {
        $this->cp = $cp;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function getNbPointsFidelite(): ?int
    {
        return $this->nbPointsFidelite;
    }

    public function setNbPointsFidelite(?int $nbPointsFidelite): self
    {
        $this->nbPointsFidelite = $nbPointsFidelite;

        return $this;
    }

    /**
     * @return Collection|GenreCine[]
     */
    public function getGenresCine(): Collection
    {
        return $this->genresCine;
    }

    public function addGenresCine(GenreCine $genresCine): self
    {
        if (!$this->genresCine->contains($genresCine)) {
            $this->genresCine[] = $genresCine;
            $genresCine->addUtilisateur($this);
        }

        return $this;
    }

    public function removeGenresCine(GenreCine $genresCine): self
    {
        if ($this->genresCine->removeElement($genresCine)) {
            $genresCine->removeUtilisateur($this);
        }

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
            $avi->setUtilisateur($this);
        }

        return $this;
    }

    public function removeAvi(Avis $avi): self
    {
        if ($this->avis->removeElement($avi)) {
            // set the owning side to null (unless already changed)
            if ($avi->getUtilisateur() === $this) {
                $avi->setUtilisateur(null);
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
            $commande->setUtilisateur($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            // set the owning side to null (unless already changed)
            if ($commande->getUtilisateur() === $this) {
                $commande->setUtilisateur(null);
            }
        }

        return $this;
    }

    public function getAge()
    {
        $dateInterval = $this->dateNaissanceUtilisateur->diff(new \DateTime());
 
        return $dateInterval->y;
    }
}
