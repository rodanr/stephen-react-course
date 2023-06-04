import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dadc877a-494a-4fa6-a5f4-4836a831c038",
      label: "Can I use React on a project ?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "6c3989ae-1e2a-4205-aa38-976086225eb4",
      label: "Can I use Javascript on a project?",
      content:
        "You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want.",
    },
    {
      id: "402a8b4a-7051-44ad-b80a-5a14b0c68365",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.",
    },
  ];

  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
