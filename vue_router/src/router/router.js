import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Details from "../pages/Details";
export default [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "message",
        component: Message,
        children: [
          {
            name: "Details", //组件的标识名称
            path: "/home/message/detail/:id",
            component: Details,
            //方式一:布尔值==>直接将params参数数据映射至props(只能是params数据)
            // props: true,
            //方式二:对象==>将对象中所有属性映射至props传入(只能是对象)
            // props: { id: 12, name: "laowang" },
            //方式三:函数 ==>将函数返回对象中所有属性映射成props传入(可以传递多种数据)
            props: (route) => ({
              id: route.params.id,
              title: route.query.title,
              name: "hello",
            }),
          },
        ],
      },
      {
        path: "news",
        component: News,
      },
    ],
  },
  {
    path: "/",
    redirect: "/about",
  },
];
