# Backlog — Schichtplan

> Ein Issue = ein Durchgang mit Claude. Oben steht, was als Nächstes dran ist.
> Status: ⬜ offen · 🔧 in Arbeit · ✅ fertig (alle Kriterien im Browser geprüft)
> Liegt der Backlog in Linear (`/ndu-linear`), steht unten statt der Issues nur der Verweis auf Team und Projekt.
> Aufbau jedes Issues: **Ziel** (was danach möglich ist, für wen und warum – „damit …“) · **Nicht im Umfang** · **Akzeptanzkriterien** (Gegeben … wenn … dann …) · **Fertig, wenn** (woran man es prüft).

## 1. Wochenraster: Schichten per Klick einteilen 🔧

**Ziel:** Die Filialleiterin sieht die Woche als Tabelle, trägt pro Tag die Startzeit ein und sieht pro Tag, wie viele Leute eingeteilt sind, damit sie den Wochenplan an einem Ort baut statt auf Zettel oder in einer Chat-Nachricht und Lücken sofort erkennt.

**Nicht im Umfang:** Speichern über das Neuladen hinaus, eigene Team-Liste (kommt in Issue 3, bis dahin gibt es feste Beispielnamen), mehrere Wochen, Endzeiten, Bereiche wie Küche oder Spülen, Teilen per Link, Login.

**Akzeptanzkriterien:**
- Gegeben die Seite „Wochenplan“, wenn ich sie öffne, dann sehe ich eine Tabelle mit den sieben Wochentagen als Spalten und den Beispiel-Mitarbeitenden als Zeilen.
- Gegeben die Tabelle, wenn ich auf ein leeres Feld tippe, dann kann ich genau eine Auswahl treffen (Startzeit 8:00, 10:30, 11:30, 12:00, 17:00, 18:00, 18:30 oder frei), und sie erscheint im Feld.
- Gegeben ein Feld mit Auswahl, wenn ich eine andere wähle, dann ersetzt sie die bisherige.
- Gegeben ein Feld mit Auswahl, wenn ich sie entferne, dann ist das Feld wieder leer.
- Gegeben die Tabelle, wenn ich Schichten eintrage, dann zeigt eine Zeile unter der Tabelle pro Tag, wie viele Personen eingeteilt sind (frei zählt nicht).
- Gegeben ein Handy mit 375 px Breite, wenn ich die Seite öffne, dann scrollt die Seite nicht seitlich, und nur die Tabelle lässt sich seitlich wischen.
- Negativfall: Gegeben ein Feld, wenn ich die Auswahl abbreche, dann bleibt das Feld unverändert.

**Fertig, wenn:** Ich öffne „Wochenplan“, trage in drei Feldern eine Startzeit und in einem „frei“ ein, entferne eine Startzeit wieder und sehe Tabelle und Tageszählung sofort passend.

## 2. Login: Konto anlegen, anmelden, abmelden 🔧

**Ziel:** Die Filialleiterin legt ein Konto an und meldet sich mit E-Mail und Passwort an, damit ihr Team und ihr Wochenplan nur ihr gehören und später gespeichert werden können. Dieses Issue kommt vor Issue 3.

**Nicht im Umfang:** Passwort zurücksetzen, Anmeldung über Google oder andere Dienste, Konten für das Team (es sieht den Plan später nur per Link), Rollen, Profilseite, eigene Datenbank-Tabellen (kommen mit Issue 3). Einstellungen im Supabase-Projekt und Regeln lege ich erst nach deinem Okay an.

**Akzeptanzkriterien:**
- Gegeben die Seite „Anmelden“, wenn ich eine E-Mail-Adresse und ein Passwort mit mindestens 8 Zeichen eingebe und „Konto anlegen“ wähle, dann bin ich angemeldet und sehe den Wochenplan.
- Gegeben ein angelegtes Konto und ich bin abgemeldet, wenn ich E-Mail und Passwort eingebe und „Anmelden“ wähle, dann sehe ich den Wochenplan.
- Gegeben ich bin angemeldet, wenn ich im Header auf „Abmelden“ tippe, dann bin ich abgemeldet und sehe die Seite „Anmelden“.
- Gegeben ich bin angemeldet, wenn ich die Seite neu lade, dann bleibe ich angemeldet.
- Gegeben ich bin nicht angemeldet, wenn ich „Wochenplan“ direkt öffne, dann lande ich auf der Seite „Anmelden“ mit einem ganzen deutschen Satz, dass ich mich zuerst anmelden muss.
- Gegeben ein Handy mit 375 px Breite, wenn ich die Seite „Anmelden“ öffne, dann scrollt die Seite nicht seitlich, der Header bleibt einzeilig, und die Felder und Buttons sind mindestens 44 px hoch.
- Negativfall: Gegeben ein falsches Passwort oder eine unbekannte E-Mail-Adresse, wenn ich mich anmelde, dann erscheint ein ganzer deutscher Satz als Hinweis, und ich bleibe abgemeldet.
- Negativfall: Gegeben ein Passwort mit weniger als 8 Zeichen, wenn ich ein Konto anlege, dann erscheint ein ganzer deutscher Satz als Hinweis, und es entsteht kein Konto.
- Negativfall: Gegeben eine E-Mail-Adresse, die schon ein Konto hat, wenn ich noch einmal ein Konto anlege, dann erscheint ein ganzer deutscher Satz als Hinweis.

**Fertig, wenn:** Ich lege ein Konto an, sehe den Wochenplan, melde mich ab, versuche „Wochenplan“ direkt zu öffnen und lande auf „Anmelden“, melde mich wieder an und lade die Seite neu, ohne dass ich abgemeldet werde.

## 3. Team-Liste: Mitarbeitende einmal anlegen ✅

**Ziel:** Die Filialleiterin legt ihr Team einmal an und das Wochenraster nutzt es, damit sie nicht jede Woche Namen neu tippt.

**Nicht im Umfang:** Rollen, Arbeitszeiten oder Verträge, Login für die Mitarbeitenden, Teilen per Link, Sortieren per Ziehen. Die Datenbank-Änderungen (Tabelle und Regeln) lege ich erst nach deinem Okay an.

**Akzeptanzkriterien:**
- Gegeben die Seite „Team“, wenn ich einen Namen eingebe und speichere, dann erscheint er in der Liste.
- Gegeben ein Name in der Liste, wenn ich ihn ändere und speichere, dann steht der neue Name in der Liste und im Wochenplan, auch nach dem Neuladen.
- Gegeben ein Name in der Liste, wenn ich ihn entferne, dann ist er weg, auch nach dem Neuladen.
- Gegeben mindestens ein Teammitglied, wenn ich den „Wochenplan“ öffne, dann stehen die Namen aus der Liste als Zeilen im Raster, in der Reihenfolge, in der ich sie angelegt habe.
- Gegeben keine Teammitglieder, wenn ich den „Wochenplan“ öffne, dann sehe ich einen Satz und einen Link zur Seite „Team“ statt eines leeren Rasters.
- Negativfall: Gegeben ein leeres Namensfeld, wenn ich speichere, dann erscheint ein ganzer deutscher Satz als Hinweis, und nichts wird angelegt.
- Negativfall: Gegeben ein Name, der schon in der Liste steht, wenn ich ihn noch einmal speichere, dann erscheint ein ganzer deutscher Satz als Hinweis, und es entsteht kein Doppel.

**Fertig, wenn:** Ich lege drei Namen an, benenne einen um, lade die Seite neu, sehe alle drei noch, und im Wochenplan stehen genau diese Namen in dieser Reihenfolge.

## 4. Plan speichern und per Link teilen ⬜

**Ziel:** Die Filialleiterin speichert den Wochenplan und schickt dem Team einen Link, über den es die aktuelle Woche ohne Konto sieht, damit es nur noch einen gültigen Stand gibt.

**Nicht im Umfang:** Andere Wochen und Wochenwechsel, Vorwoche kopieren, Wunschtage, Benachrichtigungen, Tauschen von Schichten, Konten für das Team, Ablaufdatum für Links. Die Datenbank-Änderungen (Tabellen und Regeln) lege ich erst nach deinem Okay an.

**Akzeptanzkriterien:**
- Gegeben eine eingetragene Schicht, wenn ich die Seite neu lade, dann steht sie noch da.
- Gegeben der „Wochenplan“, wenn ich ihn öffne, dann sehe ich die aktuelle Woche mit Datum über der Tabelle (z. B. „13.–19. Okt. 2026“).
- Gegeben ein eingeteilter Wochenplan, wenn ich auf „Link kopieren“ tippe, dann steht ein Link in der Zwischenablage, und ich sehe eine Bestätigung.
- Gegeben der Link, wenn ich ihn in einem privaten Fenster ohne Anmeldung öffne, dann sehe ich die aktuelle Woche, aber keine Bedienelemente zum Ändern.
- Gegeben ich ändere im Wochenplan eine Schicht, wenn ich den Link neu lade, dann zeigt er den neuen Stand.
- Gegeben ein geteilter Link, wenn ich auf „Neuen Link erzeugen“ tippe und bestätige, dann funktioniert der alte Link nicht mehr, und der neue steht in der Zwischenablage.
- Gegeben ein Handy mit 375 px Breite, wenn ich den Link öffne, dann scrollt die Seite nicht seitlich, und nur die Tabelle lässt sich seitlich wischen.
- Negativfall: Gegeben ein erfundener oder ersetzter Link, wenn ich ihn öffne, dann sehe ich einen ganzen deutschen Satz, dass es den Plan nicht gibt, mit einem Link zur Startseite.
- Negativfall: Gegeben ein Teammitglied mit eingetragenen Schichten, wenn ich es im Team entferne, dann sehe ich vorher einen ganzen deutschen Satz mit der Anzahl seiner Schichten und kann abbrechen.

**Fertig, wenn:** Ich trage Schichten ein, lade neu und sehe sie noch. Ich kopiere den Link, öffne ihn in einem privaten Fenster, sehe den Plan, ändere ihn und sehe die Änderung nach dem Neuladen. Dann erzeuge ich einen neuen Link, und der alte zeigt den Hinweis.
