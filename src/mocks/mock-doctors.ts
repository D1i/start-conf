import { Doctor } from '../entities/doctor';
import { Illness } from '../entities/illness';
import { getRandomNumBySeed, pickRandom, pickRandomBySeed } from '../utils';
import { generateMockIllnessList } from './mock-illnesses';
import { v4 as uuid } from 'uuid';

export const doctorsMock: Doctor[] = [
  new Doctor({
    firstName: 'Elena',
    lastName: 'Smirnova',
    stage: 12,
    id: uuid(),
    selfInfo:
      'Therapist with over 10 years of experience in internal medicine.',
    illnesses: [
      new Illness('flu', 'Influenza virus treatment and prevention.'),
      new Illness(
        'pneumonia',
        'Treats bacterial and viral pneumonia effectively.'
      ),
    ],
  }),

  new Doctor({
    firstName: 'Ivan',
    lastName: 'Petrov',
    stage: 8,
    id: uuid(),
    selfInfo: 'Specialist in chronic diseases and metabolic disorders.',
    illnesses: [
      new Illness(
        'diabetes',
        'Focused on managing type 1 and type 2 diabetes.'
      ),
      new Illness('arthritis', 'Helps reduce inflammation and joint pain.'),
    ],
  }),

  new Doctor({
    firstName: 'Maria',
    lastName: 'Kuznetsova',
    stage: 15,
    id: uuid(),
    selfInfo: 'Expert in neurology and pain management.',
    illnesses: [
      new Illness(
        'migraine',
        'Treats migraine through neurological evaluation.'
      ),
      new Illness(
        'eczema',
        'Experience in dermatological autoimmune conditions.'
      ),
    ],
  }),
];

export const firstNamesMock: Array<string> = [
  'Elena',
  'Ivan',
  'Maria',
  'Oleg',
  'Anna',
  'Sergey',
  'Natalia',
  'Dmitry',
  'Olga',
  'Andrey',
];

const lastNamesMock: Array<string> = [
  'Smirnova',
  'Ivanov',
  'Kuznetsova',
  'Petrov',
  'Sokolova',
  'Volkov',
  'Fedorova',
  'Popov',
  'Lebedev',
  'Morozov',
];

export const selfInfosMock: Array<string> = [
  'Experienced therapist specializing in internal medicine and preventive care.',
  'Expert in managing chronic illnesses and patient rehabilitation.',
  'Neurologist with a focus on migraines, sleep disorders, and epilepsy.',
  'Family doctor with 10+ years of experience in general health and wellness.',
  'Endocrinologist focusing on diabetes, thyroid, and metabolic disorders.',
  'Dermatologist skilled in treating eczema, psoriasis, and acne.',
  'Pulmonologist treating asthma, bronchitis, and respiratory infections.',
  'Cardiologist specializing in hypertension, arrhythmia, and heart failure.',
  'Pediatrician passionate about child health, development, and immunization.',
  'Gastroenterologist treating digestive disorders and dietary issues.',
  'General practitioner focused on holistic patient care and diagnostics.',
  'Psychiatrist working with mood disorders, anxiety, and depression.',
  'Rheumatologist treating arthritis, joint pain, and autoimmune diseases.',
  'Medical consultant with experience in complex multi-system conditions.',
  'Rehabilitation specialist helping patients recover mobility and strength.',
];

export function generateMockDoctor(seed: number = 1000): Doctor {
  const firstName = pickRandomBySeed(firstNamesMock, seed);
  const lastName = pickRandomBySeed(lastNamesMock, seed + 90);
  const selfInfo = pickRandomBySeed(selfInfosMock, seed + 184);
  const stage = getRandomNumBySeed(20, seed);

  return new Doctor({
    firstName: firstName,
    lastName: lastName,
    stage: stage,
    id: uuid(),
    selfInfo: selfInfo,
    illnesses: generateMockIllnessList(10),
  });
}

export function generateMockDoctorsList(count = 6): Array<Doctor> {
  const result: Doctor[] = [];
  for (let i = 0; i < count; i++) {
    result.push(generateMockDoctor(6 + 4 * i)); // Просто случайная функция для генерации уникального seed
  }
  return result;
}
