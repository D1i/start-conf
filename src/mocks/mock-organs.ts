import { OrganTypes } from "../entities/organ-types";
import { Organ } from "../entities/organ";
import { pickRandom } from "../utils";
import { generateMockIllnessList } from "./mock-illnesses";
import { v4 as uuid } from "uuid";

export const organDescriptions: Record<OrganTypes, string> = {
  Brain:
    "The central organ of the nervous system, responsible for thought, memory, and control of the body.",
  "Pituitary gland":
    "An endocrine gland that regulates growth, metabolism, and reproductive functions.",
  "Thyroid gland": "Regulates metabolism through the release of hormones.",
  Heart: "A muscular organ that pumps blood throughout the body.",
  Aorta:
    "The main artery that carries oxygenated blood from the heart to the body.",
  "Vena cava": "Large vein that carries deoxygenated blood back to the heart.",
  "Left lung":
    "Organ responsible for gas exchange, providing oxygen to the blood.",
  "Right lung": "Performs gas exchange to oxygenate the bloodstream.",
  Bronchi: "Air passages that direct air into the lungs.",
  Trachea: "A tube that carries air from the throat to the lungs.",
  Esophagus: "A muscular tube transporting food from the mouth to the stomach.",
  Stomach: "Breaks down food using acid and enzymes for digestion.",
  "Small intestine": "Absorbs nutrients from digested food.",
  "Large intestine": "Absorbs water and forms feces from undigested food.",
  Liver:
    "Processes nutrients, detoxifies harmful substances, and produces bile.",
  Gallbladder: "Stores bile that helps digest fats.",
  Pancreas: "Produces insulin and digestive enzymes.",
  Spleen: "Filters blood and supports immune function.",
  Kidneys: "Filter waste from the blood and produce urine.",
  "Adrenal glands": "Produce hormones involved in stress and metabolism.",
  "Urinary bladder": "Stores urine until it is expelled from the body.",
  Ureter: "Carries urine from the kidneys to the bladder.",
  Urethra: "Transports urine from the bladder to the outside of the body.",
  Uterus: "Supports fetal development during pregnancy.",
  Ovaries: "Produce eggs and female sex hormones.",
  Prostate: "Secretes fluid that nourishes and protects sperm.",
  "Seminal vesicles": "Produce fluid that is part of semen.",
  "Mammary glands": "Produce milk for breastfeeding.",
  "Cervical lymph nodes": "Filter lymph from the head and neck.",
  "Axillary lymph nodes":
    "Help protect against infection in the arms and chest.",
  "Inguinal lymph nodes": "Filter lymph from the lower limbs and groin.",
  "Subclavian artery":
    "Supplies blood to the upper limbs and parts of the brain.",
  "Brachial artery": "Main artery of the upper arm.",
  "Radial artery": "Common site for checking pulse at the wrist.",
  "Iliac artery": "Supplies blood to the pelvis and legs.",
  "Femoral artery": "Major artery supplying blood to the thigh and leg.",
  "Carotid artery": "Supplies blood to the brain and head.",
  "Portal vein": "Carries blood from the digestive organs to the liver.",
  "Superior vena cava": "Returns blood from the upper body to the heart.",
  "Inferior vena cava": "Returns blood from the lower body to the heart.",
  "Spinal cord": "Transmits nerve signals between the brain and body.",
  Sacrum: "A triangular bone at the base of the spine.",
  Coccyx: "A small tailbone at the end of the spinal column.",
  Cerebellum: "Coordinates voluntary movements and balance.",
  Midbrain: "Controls vision, hearing, and motor functions.",
  Larynx: "Contains the vocal cords and aids in breathing and speaking.",
  Pharynx: "Passageway for air and food connecting mouth and esophagus.",
  Skin: "Protects the body and regulates temperature.",
  Retina: "Converts light into nerve signals sent to the brain.",
  Lens: "Focuses light onto the retina.",
  "Inner ear": "Responsible for hearing and balance.",
  "Middle ear": "Transfers sound vibrations to the inner ear.",
  "Outer ear": "Captures sound waves and directs them inward.",
  Tongue: "Assists in tasting, swallowing, and speaking.",
  Palate: "Separates the oral and nasal cavities.",
  Diaphragm: "Muscle that helps with breathing by expanding the lungs.",
  "Synovial membrane": "Secretes fluid to lubricate joints.",
  "Lymphatic system": "Removes waste and supports immune function.",
  "Endocrine system": "Controls hormonal balance and body regulation.",
  "Circulatory system":
    "Transports blood, oxygen, and nutrients throughout the body.",
  "Respiratory system": "Facilitates breathing and gas exchange.",
  "Digestive system": "Processes food and absorbs nutrients.",
  "Genitourinary system": "Handles waste excretion and reproductive functions.",
  "Central nervous system":
    "Processes information and coordinates body activity.",
  "Peripheral nervous system":
    "Transmits signals between the CNS and the rest of the body.",
  "Skeletal system": "Provides structural support and protection.",
  "Muscular system": "Enables movement and maintains posture.",
};

const organTypes = Object.keys(organDescriptions) as OrganTypes[];

export function generateMockOrgans(): Organ {
  const type = pickRandom(organTypes);
  const description = organDescriptions[type];
  return new Organ({
    name: type,
    id: uuid(),
    description,
    illnesses: generateMockIllnessList(Math.floor(Math.random() * 10)),
  });
}

export function generateMockOrgansList(count = 5): Array<Organ> {
  const result: Array<Organ> = [];
  for (let i = 0; i < count; i++) {
    result.push(generateMockOrgans());
  }
  return result;
}
