-- CreateTable
CREATE TABLE `vocabulary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `idx_vocabulary_word`(`word`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vocabulary_meaning` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vocabulary_id` INTEGER NOT NULL,
    `part_of_speech` VARCHAR(30) NOT NULL,
    `meaning` VARCHAR(255) NOT NULL,
    `ipa` VARCHAR(255) NULL,
    `pronunciation` VARCHAR(255) NULL,
    `example` VARCHAR(255) NULL,
    `note` VARCHAR(255) NULL,
    `usage` VARCHAR(500) NULL,
    `english_definition` VARCHAR(500) NULL,

    INDEX `idx_vocabulary_meaning_vocabulary_id`(`vocabulary_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vocabulary_meaning` ADD CONSTRAINT `vocabulary_meaning_vocabulary_id_fkey` FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
