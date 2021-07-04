<?php

namespace App\Repository;

use App\Entity\GenreCine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GenreCine|null find($id, $lockMode = null, $lockVersion = null)
 * @method GenreCine|null findOneBy(array $criteria, array $orderBy = null)
 * @method GenreCine[]    findAll()
 * @method GenreCine[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GenreCineRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GenreCine::class);
    }

    // /**
    //  * @return GenreCine[] Returns an array of GenreCine objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GenreCine
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
