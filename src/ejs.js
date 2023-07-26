import ejs from "ejs";

export const renderFile = (filepath, body, options) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filepath, body, options, (error, template) => {
      if (error) {
        reject(new Error(error));
      }

      resolve(template);
    });
  });
};

export default { ...ejs, renderFile };
