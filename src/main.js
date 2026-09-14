import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="birthday-site">
    <section class="hero">
      <p class="eyebrow">Birthday Celebration</p>
      <h1>Happy Birthday, Darsh!</h1>
      <p class="lead">A starter birthday website scaffold you can personalize with photos, messages, and event details.</p>
      <div class="actions">
        <a href="#event" class="btn primary">View Event Plan</a>
        <a href="#wishes" class="btn">Add Wishes</a>
      </div>
    </section>

    <section id="event" class="panel">
      <h2>Event Snapshot</h2>
      <ul>
        <li><strong>Date:</strong> 15 October 2026</li>
        <li><strong>Time:</strong> 7:00 PM</li>
        <li><strong>Venue:</strong> Rooftop Garden</li>
      </ul>
    </section>

    <section id="wishes" class="panel">
      <h2>Birthday Wishes</h2>
      <p>Scaffold placeholder for dynamic guest wishes or a form integration.</p>
    </section>
  </main>
`
