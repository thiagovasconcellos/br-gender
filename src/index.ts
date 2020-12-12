import { options } from './@types/types';
import { evaluateMen, evaluateWomen } from './helpers/Evaluate';

/**
* This method takes an name and returns the gender based on CENSO-API. 
* The method will evaluate given name to decide if it is either male or female based on brazilian census.
* @param name Given name"
* @param options Set options
* -> percentage: if you want to receive the percentage along the gender
*/
async function getGenderByName(name: string, opts?: options): Promise<string | { gender: string, percentage: number}> {
  const men = await evaluateMen(name);
  const women = await evaluateWomen(name);
  const total = men + women;

  if (!opts) {
    if ((men / total) * 100 > 95) {
      return 'Male';
    } else if ((women / total) * 100 > 95) {
      return 'Female'
    } else {
      return 'NA'
    }
  }
  const probMen = (men / total) * 100;
  const probWomen = (women / total) * 100;

  if (probMen > 95) {
    return {
      gender: 'Male',
      percentage: probMen
    }
  } else if (probWomen > 95) {
    return {
      gender: 'Female',
      percentage: probWomen
    }
  } else {
    return {
      gender: 'NA',
      percentage: 0
    }
  }
}

export default getGenderByName;