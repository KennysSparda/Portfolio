export default function Container(props) {
  return (
    <section id={props.id} className="text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto bg-transparent bg-opacity-30 hover:bg-opacity-20 my-32 p-8 backdrop-filter backdrop-blur-lg rounded">
        {props.children}
      </div>
    </section>
  );
}
