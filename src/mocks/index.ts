import {generateMockIllnessList} from "./mock-illnesses";
import {generateMockDoctorsList} from "./mock-doctors";
import {generateMockOrgansList} from './mock-organs';

export const mocks = {
    getIllnesses: generateMockIllnessList,
    getDoctors: generateMockDoctorsList,
    getOrgans: generateMockOrgansList
};