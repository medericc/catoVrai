import React from 'react';

export default function EssaiPage() {
  return (
    <div className="bible-en-main-document">
      {/* En-tête avec logo et titre */}
      <header className="document-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-frame">
              {/* Votre image personnelle - remplacez par votre image.png */}
              <div className="logo-image">
                <div className="image-placeholder">
                  <img 
                    src="/public/image.png" 
                    alt="Logo BibleEnMain" 
                    className="personal-logo"
                  />
                </div>
                <div className="logo-glow"></div>
              </div>
              <div className="logo-title">
                <h1 className="main-title">BibleEnMain</h1>
                <div className="title-underline"></div>
                <p className="motto">Lumière sur les Écritures</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="header-divider">
          <div className="divider-ornament">✝</div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="document-content">
        {/* Titre de l&apos;essai */}
        <div className="essay-title-container">
          <h2 className="essay-title">L&apos;impérialisme culturel et la corruption du langage</h2>
          <div className="title-decoration">
            <span className="decoration-left">❧</span>
            <span className="decoration-center">Réflexion théologique</span>
            <span className="decoration-right">❧</span>
          </div>
        </div>

        {/* Contenu de l&apos;essai */}
        <article className="essay-content">
          <section className="intro-section">
            <div className="initial-letter">L</div>
            <p className="intro-paragraph">
              <span className="highlight-text">L&apos;impérialisme culturel de notre temps, par son ardente obligation d&apos;universalité, précipite le langage vers un inéluctable nivellement.</span> Contraint à une simplification outrancière pour garantir son assimilation globale, il sacrifie la substance à l&apos;accessibilité. En dépouillant ainsi le verbe de son exigence, l&apos;on en étiole la vigueur, et l&apos;on assèche la source où s&apos;abreuve l&apos;intelligence populaire.
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              Qu&apos;il nous suffise d&apos;évoquer Sainte Jeanne d&apos;Arc : nonobstant son absence de toute instruction lettrée, elle s&apos;exprimait en une langue d&apos;une justesse admirable. Or, de nos jours, cette indigence verbale permet de corrompre l&apos;essence des mots, voire d&apos;en travestir audacieusement les définitions. Ce noir dessein ne vise qu&apos;à semer la discorde par d&apos;interminables disputes pour, in fine, se rendre maître des esprits.
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              Il appert que jadis régnait une ordonnance tutélaire grâce à laquelle chaque âme, connaissant son rang et sa profession, s&apos;adonnait pleinement à son pèlerinage terrestre vers la sainteté. Or, un impérialisme délétère insinue désormais les germes de l&apos;hérésie au sein même de chaque identité. Cette corruption sape les fondements culturels, précipitant l&apos;effondrement de l&apos;ordre social et engendrant la discorde universelle ; car nul ne daigne plus se soumettre à la tradition, s&apos;écriant avec arrogance : « De quel droit m&apos;imposerait-on entrave ? ».
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              De surcroît, seul Dieu unit véritablement, et c&apos;est Lui qui a voulu la diversité des cultures, unies par la Foi (« Allez, faites de toutes les nations des disciples »). Considérez, à titre d&apos;exemple, les catholiques de Bretagne et ceux du Béarn : ils différaient par leur culture (tels un &quot;bleu foncé&quot; et un &quot;vert foncé&quot;), car Dieu l&apos;a voulu ainsi, mais ils se trouvaient indissolublement liés par la nuance fondamentale de leur piété (le côté &quot;foncé&quot;).
            </p>
          </section>

          <div className="illustrative-box">
            <div className="illustration-icon">⛪</div>
            <p className="illustration-text">
              <em>Dieu ayant été chassé du centre de la cité, l&apos;homme s&apos;évertue à inventer des rivalités sans substance, ni grandeur culturelle...</em>
            </p>
          </div>

          <section className="paragraph-section">
            <p>
              ...telles celles promues par les Waleffe, les Naismith ou les Coubertin. Ces vaines compétitions n&apos;ont d&apos;autre dessein que de briser l&apos;hégémonie séculaire de l&apos;Église et de substituer à l&apos;unité perdue des divisions factices.
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              Plus pernicieux encore, cet impérialisme instaure une véritable tyrannie de la conformité : il ne s&apos;agit pas seulement d&apos;étaler l&apos;impudeur, mais de contraindre les âmes à la récitation servile d&apos;une novlangue imposée. Pour satisfaire des intérêts mercantiles, l&apos;on exige de chacun qu&apos;il professe publiquement les dogmes du moment (décrets sans substance qu&apos;une intelligentsia auto-proclamée impose). Et malheur à celui qui refuserait de ployer le genou ou d&apos;afficher leurs symboles : cette dictature de l&apos;esprit ne tolère aucune dissidence, forçant l&apos;homme à devenir le héraut de sa propre servitude.
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              Cet impérialisme se traduit par un effondrement manifeste des digues morales, culminant dans l&apos;assassinat de presque cent millions d&apos;innocents par an. L&apos;on octroie et l&apos;on tolère maintes choses là où la plus grande prudence serait de mise. Jadis, les hérétiques dits Cathares furent promptement écartés afin de préserver l&apos;intégrité de la Sainte Foi. À l&apos;heure présente, une indulgente licence conduit aisément les âmes à franchir le pas vers l&apos;abîme.
            </p>
          </section>

          <section className="paragraph-section">
            <p>
              Ces austères interdits tenaient lieu de remparts salutaires : en plaçant la barrière de la morale très en amont, l&apos;on s&apos;assurait que la moindre transgression ne précipitât point l&apos;âme dans l&apos;abomination. À titre d&apos;exemple, être huguenote, telle Madame Catherine de Bourbon, était alors estimé « exorbitant et déraisonnable » ; de nos jours, embrasser la doctrine réformée est tenu pour « quasi admissible ». Cette déperdition des repères ne saurait qu&apos;obérer le salut des âmes et mettre en péril l&apos;ordonnancement de la société.
            </p>
          </section>

          <section className="conclusion-section">
            <div className="conclusion-decoration">※</div>
            <p className="conclusion-paragraph">
              Sous la tutelle de l&apos;Europe catholique, de vastes époques de concorde ont fleuri, lesquelles furent souvent scellées par le saint baptême. À présent, la paix ne s&apos;impose qu&apos;à la suite des hécatombes et de la victoire armée. Ces différends sont trop fréquemment conduits par des hommes qui, au fond de l&apos;entendement, professent des idées similaires (tels un « vert sombre » luttant contre un « vert pâle », l&apos;un et l&apos;autre n&apos;en demeurant pas moins de l&apos;essence du vert).
            </p>
            <div className="conclusion-decoration">※</div>
          </section>
        </article>

        {/* Pied de page */}
        <footer className="document-footer">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-text">« La vérité vous rendra libres » - Jean 8:32</p>
            </div>
            <div className="footer-center">
              <div className="seal">BibleEnMain</div>
            </div>
            <div className="footer-right">
              <p className="footer-text">Réflexion théologique et culturelle</p>
            </div>
          </div>
          <div className="page-number">
            Page 1
          </div>
        </footer>
      </main>
    </div>
  );
}