module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25695912516ca58ac60a377614513d2a'),
  },
});
