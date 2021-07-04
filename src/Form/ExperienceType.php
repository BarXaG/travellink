<?php

namespace App\Form;

use App\Entity\GenreCine;
use App\Entity\Experience;
use App\Repository\GenreCineRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ExperienceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('theme')
            ->add('titreExperience')
            ->add('descriptionExperience')
            ->add('villeDestination')
            ->add('paysDestination')
            ->add('latitudeDestination')
            ->add('longitudeDestination')
            ->add('typeSejour', ChoiceType::class, [
                'choices' => [
                        'Week-end' => 'week',
                        'Semaine' => 'semaine',
                        'Long Séjour' => 'longsejour',
                ],
            ])
            ->add('dateDepart', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateRetour',  DateType::class, [
                'widget' => 'single_text',
            
            ])
            ->add('genreCine', EntityType::class, [
                'class' => GenreCine::class,
                'query_builder' => function (GenreCineRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.genre', 'ASC');
                },
                'choice_label' => 'genre',
            ])
            ->add('ImageExperience', FileType::class, [
                
                'label' => "Choisir une image (CTRL + clic pour en choisir plusieurs)",
                'multiple' => true,
                'mapped' => false,
                'required' => false,
                // 'attr' => ['class' => 'dropify', 'data-allowed-formats'=> "portrait square"]
                'attr' => ['placeholder' => 'Choississez vos images']
                
            ])
            ->add('Enregistrer', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Experience::class,
        ]);
    }
}
