interface Notifications {
  all: boolean;
  error: boolean;
  create: boolean;
  delete: boolean;
  deleteMany: boolean;
  get: boolean;
  getList: boolean;
  getNodes: boolean;
  getOne: boolean;
  getTree: boolean;
  update: boolean;
  updateMany: boolean;
}

interface Settings {
  title: string;
  errorLog: string[];
  notifications: Notifications;
}

const config: Settings = {
  title: "VueAdmin",
  errorLog: ["production"],
  notifications: {
    all: false,
    error: true,
    create: true,
    delete: true,
    deleteMany: true,
    get: false,
    getList: false,
    getNodes: false,
    getOne: false,
    getTree: false,
    update: true,
    updateMany: true,
  },
};

export default config;
