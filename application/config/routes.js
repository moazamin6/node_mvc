const router = require('../../kernel/NodeRoutes');

router.get('/', 'my_controller@check');
router.route('get', '/name', 'my_controller@getName');