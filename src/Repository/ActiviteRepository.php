<?php

namespace App\Repository;

use App\Entity\Activite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Activite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activite[]    findAll()
 * @method Activite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActiviteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activite::class);
    }

    public function findActivitesBasicJour1($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1'")
        ->andWhere("e.jourEtape = '1'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }
    
    public function findActivitesMediumJour1($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1' OR a.formule = '2'")
        ->andWhere("e.jourEtape = '1'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findActivitesPremiumJour1($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '1'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findActivitesBasicJour2($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1'")
        ->andWhere("e.jourEtape = '2'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }
    
    public function findActivitesMediumJour2($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1' OR a.formule = '2'")
        ->andWhere("e.jourEtape = '2'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findActivitesPremiumJour2($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '2'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findActivitesBasicJour3($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1'")
        ->andWhere("e.jourEtape = '3'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }
    
    public function findActivitesMediumJour3($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("a.formule = '1' OR a.formule = '2'")
        ->andWhere("e.jourEtape = '3'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findActivitesPremiumJour3($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('a')
        ->from('App\Entity\Activite', 'a')
        ->innerJoin('a.etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '3'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return Activite[] Returns an array of Activite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Activite
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
