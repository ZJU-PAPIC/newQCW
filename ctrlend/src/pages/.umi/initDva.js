import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('D:/gitProject/newQCW/ctrlend/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('D:/gitProject/newQCW/ctrlend/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('D:/gitProject/newQCW/ctrlend/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('D:/gitProject/newQCW/ctrlend/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('D:/gitProject/newQCW/ctrlend/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('D:/gitProject/newQCW/ctrlend/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('D:/gitProject/newQCW/ctrlend/src/models/user.js').default) });
