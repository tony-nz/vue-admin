import {
  ApiService,
  useAppStore,
  useResourceStore,
} from "@tony-nz/vue-admin-core";

/**
 * Clean timestamp from date
 * @param date
 * @returns date without timestamp
 */
export const cleanTimestamp = (date: string) => {
  return date.split("T")[0];
};

/**
 * Get time from timestamp
 * @param date
 * @returns time
 */
export const getTime = (date: string) => {
  if (!date) {
    return "";
  }
  return date.split("T")[1].split(".")[0];
};

/**
 * Convert date to ISO string format
 * @param date
 * @returns ISO string
 */
export const convertDate = (date: Date) => {
  const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return utcDate.toISOString().split("T")[0];
};

/**
 * Fetch resource data from API
 * @param params
 */
export const fetchResourceData = (params) => {
  const appStore = useAppStore();

  if (params.resource && params.resource.name) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [key, value] of Object.entries(appStore.getResources)) {
        const resource = value as { name: string } | undefined;
        if (resource?.name == params.resource.name) {
          return useResourceStore(value)()
            .getList({})
            .then(({ data }) => {
              if (typeof data == "undefined") {
                return null;
              }
              return data;
            });
        }
      }
      return null;
    } catch (e) {
      // TODO ERROR LOG
      console.log(e);
    }
  }
  return ApiService.get(params.url).then((res) => {
    return res.data.data;
  });
};

/**
 * Fetch resource data from API
 * @param params
 */
export const fetchData = (params) => {
  return ApiService.get(params.url).then((res) => {
    return res.data.data;
  });
};

/**
 * filterOutCountry
 * @description Remove the country from the address
 * @param address
 * @returns {string} address
 */
export const filterOutCountry = (address) => {
  const addressArray = address.split(",");
  addressArray.pop();
  return addressArray.join(",");
};
