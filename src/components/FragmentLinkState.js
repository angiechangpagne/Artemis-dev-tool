export function fragmentLinkState(apolloCache: ApolloCache<any>): ApolloLink {
    return withClientState({
      cache: apolloCache,
      resolvers: {
        Query: {
          getFragment: (
            _: any,
            { __typename, id }: GetFragmentType,
            { cache }: { cache: any },
          ) => {
            const fragmentId = cache.config.dataIdFromObject({ __typename, id });
            const cacheResult = cache.data;
            return cacheResult.data[fragmentId];
          },
        },
      },
    });
  }