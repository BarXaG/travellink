<?php

namespace App\Repository;

use App\Entity\ImageExperience;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ImageExperience|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImageExperience|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImageExperience[]    findAll()
 * @method ImageExperience[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImageExperienceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImageExperience::class);
    }

    public function findBanniereExperience($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('i')
        ->from('App\Entity\ImageExperience', 'i')
        ->innerJoin('i.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("i.typeImage = 'Bannière'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findImageProfilExperience($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('i')
        ->from('App\Entity\ImageExperience', 'i')
        ->innerJoin('i.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("i.typeImage = 'Profil'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findVignettesExperience($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('i')
        ->from('App\Entity\ImageExperience', 'i')
        ->innerJoin('i.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("i.typeImage = 'Vignette'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return ImageExperience[] Returns an array of ImageExperience objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ImageExperience
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
