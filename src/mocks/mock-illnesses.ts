import { IllnessType } from '@/entities/illnesses-types';
import { Illness } from '@/entities/illness';
import { pickRandom, pickRandomBySeed } from '@/utils';


const illnessDescriptions: Partial<Record<IllnessType, string>> = {
  "Инфаркт миокарда":
    "Острое нарушение кровоснабжения сердечной мышцы, сопровождающееся болью в груди и одышкой.",
  Пневмония:
    'Воспаление легочной ткани, вызванное инфекцией, с лихорадкой и кашлем.',
  Гастрит:
    'Воспаление слизистой оболочки желудка, проявляющееся тошнотой и болью в животе.',
  Панкреатит:
    'Острое или хроническое воспаление поджелудочной железы, часто вызванное алкоголем или желчными камнями.',
  Гипертония:
    'Повышенное артериальное давление, увеличивающее риск инсульта и сердечного приступа.',
  'Сахарный диабет':
    'Хроническое заболевание, при котором организм не усваивает глюкозу должным образом.',
  Артрит:
    'Воспалительное заболевание суставов, вызывающее боль и ограничение подвижности.',
  'Бронхиальная астма':
    'Хроническое воспаление дыхательных путей, вызывающее удушье и кашель.',
  Цистит:
    'Воспаление мочевого пузыря, чаще у женщин, сопровождается частым и болезненным мочеиспусканием.',
  Гепатит:
    'Воспаление печени, вызванное вирусами или токсинами, с желтушностью кожи и слабостью.',
};

const illnessTypes = Object.keys(illnessDescriptions) as IllnessType[];

/**
 * Создает одну случайную болезнь
 */

export function generateMockIllness(): Illness {
  const type = pickRandomBySeed(illnessTypes, 10);
  const description = illnessDescriptions[type];
  return new Illness(type, description ?? "");
}

/**
 * Создает массив случайных болезней
 * @param count Количество
 */
export function generateMockIllnessList(count = 5): Illness[] {
  const result: Illness[] = [];
  for (let i = 0; i < count; i++) {
    result.push(generateMockIllness());
  }
  return result;
}
