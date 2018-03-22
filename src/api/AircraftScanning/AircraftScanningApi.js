import Instance from '../instance';

export const getAircraftList = () =>
  Instance.get(
    'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json',
  );
