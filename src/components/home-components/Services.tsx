export const Services = () => {
  const style = "w-[40%] md:max-w-[40%] lg:max-w-[30%] md:h-[6rem] lg:h-[7rem] m-auto";
  const items = [
    {id: 1, img: 'analytic-icon.png', title: 'Analytics'},
    {id: 2, img: 'marketing-icon.png', title: 'Marketing '},
    {id: 3, img: 'crm-icon.png', title: 'CRM'},
    {id: 4, img: 'inventory-icon.png', title: 'Inventory '}
  ];

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center bg-[#EAF0FF] p-11">
      {items.map((item) => (
        <div key={item.id} className="w-[100%] text-center">
          <img src={item.img} alt={item.title} className={style}/>
          <p className="mt-5 mb-4 text-[4vmin] md:text-[3.4vmin] lg:text-[3vmin] font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  )
}
