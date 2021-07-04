<?php

namespace App\Repository;

use App\Entity\Tarif;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Tarif|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tarif|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tarif[]    findAll()
 * @method Tarif[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TarifRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tarif::class);
    }

    public function findTarifBasic($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('t')
        ->from('App\Entity\Tarif', 't')
        ->innerJoin('t.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("t.formule = '1'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findTarifMedium($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('t')
        ->from('App\Entity\Tarif', 't')
        ->innerJoin('t.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("t.formule = '2'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    public function findTarifPremium($id)
    {
        return $query = $this->getEntityManager()->createQueryBuilder()
        ->select('t')
        ->from('App\Entity\Tarif', 't')
        ->innerJoin('t.experience', 'e')
        ->where('e.id = :id')
        ->andWhere("t.formule = '3'")
        ->setParameter('id',$id)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return Tarif[] Returns an array of Tarif objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Tarif
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
