function zip( a, b, agg = [] ) {
  if ( a.length === 0 || b.length === 0 ) return agg;
  const [x, ...xs] = a;
  const [y, ...ys] = b;
  return zip( xs, ys, [...agg, [x, y]] );
}

module.exports = {
  getChanges( message ) {
    const parts = message.split( '~' );
    const bitmask = parseInt( parts[parts.length - 1], 16 );
    const symbolsAndMasks = {
      Price: 1,
      Bid: 2,
      Offer: 4,
      LastUpdate: 8,
      Avg: 16,
      LastVolume: 32,
      LastVolumeTo: 64,
      LastTradeId: 128,
      VolumeHour: 256,
      VolumeHourTo: 512,
      Volume24Hour: 1024,
      Volume24HourTo: 2048,
      OpenHour: 4096,
      HighHour: 8192,
      LowHour: 16384,
      Open24Hour: 32768,
      High24Hour: 65536,
      Low24Hour: 131072,
      LastMarket: 262144,
    };


    const keys = ['Type', 'Market', 'From', 'To', 'Flag', ...Object.entries( symbolsAndMasks ).filter( ( [name, mask] ) => mask & bitmask ).map( ( [name] ) => name )];

    return zip( keys, parts ).reduce( ( agg, [key, data] ) => ( { ...agg, [key || 'Mask']: data } ), {} );
  },
};

