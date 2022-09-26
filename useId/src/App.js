import EmailForm from "./EmailForm";

function App() {
  return (
    <>
      <div>
        <EmailForm />
        <article style={{ marginBlock: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          justo ac quam interdum imperdiet id eget odio. Proin ultricies commodo
          lacus. Maecenas facilisis urna eget vehicula luctus. Vivamus auctor
          feugiat purus, accumsan scelerisque diam convallis et. Mauris
          tincidunt pretium pretium. Etiam consequat gravida dolor, ac vehicula
          lacus. Vivamus nisl mauris, facilisis et ante nec, vestibulum sagittis
          risus. Fusce fermentum luctus felis, in consectetur justo ultrices ut.
          Sed vitae mauris nibh. Aenean ac pretium est.
        </article>
        <EmailForm />
      </div>
    </>
  );
}

export default App;
