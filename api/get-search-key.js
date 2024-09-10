module.exports = async function (context, req) {
    context.res = {
        body: {
            searchKey: process.env.SEARCH_KEY  // Fetch the environment variable
        }
    };
};