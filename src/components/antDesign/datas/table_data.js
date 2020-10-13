//--------------------------表格字段配置-----------------------//
//表格列配置(单字段列)
export const table_columns=[
    {
        dataIndex:"key",//字段
        title:"序号",//字段标题
        //align:"center",//列的对齐方式
        width:100,//字段宽度
    },
    {
        dataIndex: 'name',
        title:'姓名',
        //align:"center",//列的对齐方式
        width:200,//字段宽度
    },
    {
        dataIndex: 'age',
        title: '年龄',
        //align:"center",//列的对齐方式
        width:100,//字段宽度
    },
    {
        dataIndex: 'address',
        title: '住址',
        //align:"center",//列的对齐方式
        width:300,//字段宽度
    }
];

//表格列配置(多字段列)
export const table_columns_multiField=[
    {//单字段列
        dataIndex:'xzmc',
        title: '发生疫情的县级行政区名称',
        width: 100,
    },
    {
        dataIndex:'slmj',
        title: '松林面积（万亩）',
    },
    {
        dataIndex:'fsmj',
        title: '发生面积（万亩）',
    },
    {//多字段列
        title:'疫情发生乡镇（街道）',
        children: [
          {
            dataIndex: 'sj',
            title: '数量（个）',
            width: 150,
          },
          {
            dataIndex: 'yqmc',
            title: '名称（疫情发生小班数量）',
            children: []
          },
        ],
    },
    {
        dataIndex: 'bz',
        title: '备注',
        children: [],
    },
];

//测试
export const test_columns=[
    {//单字段列
        dataIndex:'xzmc',
        title: '发生疫情的县级行政区名称',
        width: 100,
    },
    {
        dataIndex:'slmj',
        title: '松林面积（万亩）',
    },
    {
        dataIndex:'fsmj',
        title: '发生面积（万亩）',
    },
    {
        dataIndex:'bsss',
        title: '病死松树数量（株）',
    },
    {
        dataIndex:'yqfs',
        title: '疫情发生小班数量（个',
    },
    {//多字段列
        title:'疫情发生乡镇（街道）',
        children: [
          {
            dataIndex: 'sj',
            title: '数量（个）',
            width: 150,
          },
          {
            dataIndex: 'yqmc',
            title: '名称（疫情发生小班数量）',
            children: []
          },
        ],
    },
    {
        dataIndex: 'bz',
        title: '备注',
        children: [],
    },
];
//树形表格字段(跟其他列字段配置一样)
export const columns_tree = [
    {
      dataIndex: 'name',
      title: '名称',
    },
    {
      dataIndex: 'age',
      title: '年龄',
      width: '12%',
    },
    {
      dataIndex: 'address',
      title: '地址',
      width: '30%',
    },
];


//--------------------------表格数据-----------------------//

//嵌套数据
export const data_tree = [
    {//无子数据
        key: "1",
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        children:null
    },
    {//有子数据,树型结构数据
      key: "2",
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
         key: "3",
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park',
        },
        {
          key: "4",
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
             key: "5",
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park',
            },
          ],
        },
      ],
    },
    {
      key: "10",
      name: '四川省',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      children:[
        {
          key: "11",
          name: '成都市',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        }
      ]
    },
    {
      key: "12",
      name: '北京',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

//更普通数据结构相同
export const table_data2=[
    {
        key:"1",//数据key,必须有否则报错
        xzmc: '绵阳市涪城区',
        slmj: 1.76,
        fsmj: '0.058',
        bsss:"19",
        yqfs:"17",
        sj: '4',
        yqmc: '塘汛镇（6个）、磨家镇※（7个）、河边镇※（4个）、石塘镇（0个）',
        bz: '今年秋季普查石塘镇实现无疫情今年秋季普查石塘镇实现无疫情',
    },
    {
        key:"2",//数据key,必须有否则报错
        xzmc: '绵阳市江油市',
        slmj: '67.97',
        fsmj: '0',
        bsss:"0",
        yqfs:"0",
        sj: '1',
        yqmc: '太平镇（0个)',
        bz: '今年秋季普查太平镇实现无疫情（连续2年）',
    },
    {
        key:"3",//数据key,必须有否则报错
        xzmc: '绵阳市平武县',
        slmj: '12.99',
        fsmj: '0.0131',
        bsss:"5",
        yqfs:"1",
        sj: '2',
        yqmc: '响岩镇（1个）、南坝镇（0个）',
        bz: '今年秋季普查南坝镇实现无疫情',
    },
]

export const table_data1=[
    {
        key:"1",//数据key,必须有否则报错
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key:'2',
        name: '胡彦斌',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key:'3',
        name: '小红',
        age: 55,
        address: '西湖区湖底公园1号',
        isDisabled:true
    },
]