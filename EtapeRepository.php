<?php

namespace App\Repository;

use App\Entity\Etape;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Etape|null find($id, $lockMode = null, $lockVersion = null)
 * @method Etape|null findOneBy(array $criteria, array $orderBy = null)
 * @method Etape[]    findAll()
 * @method Etape[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtapeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Etape::class);
    }

    public function findEtapeJour1($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('e')
        ->from('App\Entity\Etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '1'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findEtapeJour2($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('e')
        ->from('App\Entity\Etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '2'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findEtapeJour3($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('e')
        ->from('App\Entity\Etape', 'e')
        ->innerJoin('e.experience', 'f')
        ->where('f.id = :id')
        ->andWhere("e.jourEtape = '3'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return Etape[] Returns an array of Etape objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Etape
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
