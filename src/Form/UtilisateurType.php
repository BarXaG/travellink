<?php

namespace App\Form;

use App\Entity\Utilisateur;
use Symfony\Component\Mime\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UtilisateurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('nom')
            ->add('prenom')
            ->add('pseudoUtilisateur', TextType::class, [
                'label' => 'Pseudo'
            ])
            ->add('dateNaissanceUtilisateur',
                BirthdayType::class, [
                    'label' => 'Date de naissance',
                    'years' => range(1920,2003),
                    'format' => 'ddMMyyyy'
                ])
            ->add('email')
            ->add('password', PasswordType::class , [
                'label'=> 'Mot de passe'])
            ->add('telephone')
            ->add('inscriptionNewsletter')
            ->add('numPieceIdentite')
            ->add('dateExpiration', DateType::class, [
                'years' => range(2021,2032),
                'format' => 'ddMMyyyy']) 
            ->add('adresse1')
            ->add('adresse2')
            ->add('ville')
            ->add('cp')
            ->add('pays')
            ->add('genresCine')
            ->add('Enregistrer', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Utilisateur::class,
        ]);
    }
}
