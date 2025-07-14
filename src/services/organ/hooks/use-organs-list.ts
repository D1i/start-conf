'use client';

import { organsStorage } from '@/storage/organs-storage';
import { useAtomValue } from 'jotai';

const useOrgansList = () =>
  useAtomValue(organsStorage).map((organ) => ({
    id: organ.id,
    name: organ.name,
    description: organ.description,
  }));

export { useOrgansList };
