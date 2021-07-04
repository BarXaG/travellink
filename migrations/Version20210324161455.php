<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210324161455 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image_experience CHANGE type_image type_image VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activite DROP FOREIGN KEY FK_B87555152A68F4D1');
        $this->addSql('ALTER TABLE activite DROP FOREIGN KEY FK_B87555154A8CA2AD');
        $this->addSql('ALTER TABLE avis DROP FOREIGN KEY FK_8F91ABF0FB88E14F');
        $this->addSql('ALTER TABLE avis DROP FOREIGN KEY FK_8F91ABF046E90E27');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DFB88E14F');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67D46E90E27');
        $this->addSql('ALTER TABLE etape DROP FOREIGN KEY FK_285F75DD46E90E27');
        $this->addSql('ALTER TABLE experience DROP FOREIGN KEY FK_590C10380B69653');
        $this->addSql('ALTER TABLE genre_cine_utilisateur DROP FOREIGN KEY FK_9C2264C180B69653');
        $this->addSql('ALTER TABLE genre_cine_utilisateur DROP FOREIGN KEY FK_9C2264C1FB88E14F');
        $this->addSql('ALTER TABLE image_experience DROP FOREIGN KEY FK_694ED63546E90E27');
        $this->addSql('ALTER TABLE image_experience CHANGE type_image type_image VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C946E90E27');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C92A68F4D1');
    }
}
