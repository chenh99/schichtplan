# Backlog — Schichtplan

> Ein Issue = ein Durchgang mit Claude. Oben steht, was als Nächstes dran ist.
> Status: ⬜ offen · 🔧 in Arbeit · ✅ fertig (alle Kriterien im Browser geprüft)
> Liegt der Backlog in Linear (`/ndu-linear`), steht unten statt der Issues nur der Verweis auf Team und Projekt.
> Aufbau jedes Issues: **Ziel** (was danach möglich ist, für wen und warum – „damit …“) · **Nicht im Umfang** · **Akzeptanzkriterien** (Gegeben … wenn … dann …) · **Fertig, wenn** (woran man es prüft).

## 1. Wochenraster: Schichten per Klick einteilen 🔧

**Ziel:** Die Filialleiterin sieht die Woche als Tabelle, trägt pro Tag die Startzeit ein und sieht pro Tag, wie viele Leute eingeteilt sind, damit sie den Wochenplan an einem Ort baut statt auf Zettel oder in einer Chat-Nachricht und Lücken sofort erkennt.

**Nicht im Umfang:** Speichern über das Neuladen hinaus, eigene Team-Liste (kommt in Issue 2, bis dahin gibt es feste Beispielnamen), mehrere Wochen, Endzeiten, Bereiche wie Küche oder Spülen, Teilen per Link, Login.

**Akzeptanzkriterien:**
- Gegeben die Seite „Wochenplan“, wenn ich sie öffne, dann sehe ich eine Tabelle mit den sieben Wochentagen als Spalten und den Beispiel-Mitarbeitenden als Zeilen.
- Gegeben die Tabelle, wenn ich auf ein leeres Feld tippe, dann kann ich genau eine Auswahl treffen (Startzeit 8:00, 10:30, 11:30, 12:00, 17:00, 18:00, 18:30 oder frei), und sie erscheint im Feld.
- Gegeben ein Feld mit Auswahl, wenn ich eine andere wähle, dann ersetzt sie die bisherige.
- Gegeben ein Feld mit Auswahl, wenn ich sie entferne, dann ist das Feld wieder leer.
- Gegeben die Tabelle, wenn ich Schichten eintrage, dann zeigt eine Zeile unter der Tabelle pro Tag, wie viele Personen eingeteilt sind (frei zählt nicht).
- Gegeben ein Handy mit 375 px Breite, wenn ich die Seite öffne, dann scrollt die Seite nicht seitlich, und nur die Tabelle lässt sich seitlich wischen.
- Negativfall: Gegeben ein Feld, wenn ich die Auswahl abbreche, dann bleibt das Feld unverändert.

**Fertig, wenn:** Ich öffne „Wochenplan“, trage in drei Feldern eine Startzeit und in einem „frei“ ein, entferne eine Startzeit wieder und sehe Tabelle und Tageszählung sofort passend.

## 2. Team-Liste: Mitarbeitende einmal anlegen ⬜

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

## 3. Wochenplan speichern und Woche wechseln ⬜

**Ziel:** Die Filialleiterin plant die nächste Woche, während die aktuelle gültig bleibt, und eingeteilte Schichten bleiben erhalten, damit sie den Plan über mehrere Tage fertigstellen kann.

**Nicht im Umfang:** Teilen per Link, Vorwoche kopieren, Vorlagen, Wochen weiter als eine Woche voraus. Die Datenbank-Änderungen (Tabelle und Regeln) lege ich erst nach deinem Okay an.

**Akzeptanzkriterien:**
- Gegeben eine eingetragene Schicht, wenn ich die Seite neu lade, dann steht sie noch da.
- Gegeben der „Wochenplan“, wenn ich ihn öffne, dann sehe ich die aktuelle Woche mit Datum über der Tabelle (z. B. „13.–19. Okt. 2026“).
- Gegeben die aktuelle Woche, wenn ich auf „Nächste Woche“ tippe, dann sehe ich das Raster der nächsten Woche mit ihrem Datum, und die aktuelle Woche bleibt unverändert.
- Gegeben die nächste Woche, wenn ich auf „Diese Woche“ tippe, dann sehe ich wieder die aktuelle Woche mit ihren Schichten.
- Negativfall: Gegeben ein Teammitglied mit eingetragenen Schichten, wenn ich es im Team entferne, dann sehe ich vorher einen ganzen deutschen Satz mit der Anzahl seiner Schichten und kann abbrechen.
- Negativfall: Gegeben ich breche das Entfernen ab, wenn ich den Wochenplan öffne, dann stehen Person und Schichten unverändert da.

**Fertig, wenn:** Ich trage Schichten für diese und nächste Woche ein, lade neu, wechsle zwischen beiden Wochen, und beide stimmen.

## 4. Plan teilen per Link ⬜

**Ziel:** Die Leitung schickt dem Team einen Link, über den es die aktuelle und die nächste Woche ohne Konto sieht, damit es nur noch einen gültigen Stand gibt.

**Nicht im Umfang:** Wunschtage, Benachrichtigungen, Tauschen von Schichten, Konten für das Team, eigene Ansicht pro Person, Ablaufdatum für Links.

**Akzeptanzkriterien:**
- Gegeben ein eingeteilter Wochenplan, wenn ich auf „Link kopieren“ tippe, dann steht ein Link in der Zwischenablage, und ich sehe eine Bestätigung.
- Gegeben der Link, wenn ich ihn in einem privaten Fenster ohne Anmeldung öffne, dann sehe ich die aktuelle Woche, aber keine Bedienelemente zum Ändern.
- Gegeben die nächste Woche hat mindestens eine Schicht, wenn ich den Link öffne, dann kann ich zur nächsten Woche wechseln. Hat sie keine, gibt es diesen Wechsel nicht.
- Gegeben ich ändere im Wochenplan eine Schicht, wenn ich den Link neu lade, dann zeigt er den neuen Stand.
- Gegeben ein geteilter Link, wenn ich auf „Neuen Link erzeugen“ tippe und bestätige, dann funktioniert der alte Link nicht mehr, und der neue steht in der Zwischenablage.
- Negativfall: Gegeben ein erfundener oder ersetzter Link, wenn ich ihn öffne, dann sehe ich einen ganzen deutschen Satz, dass es den Plan nicht gibt, mit einem Link zur Startseite.
- Gegeben ein Handy mit 375 px Breite, wenn ich den Link öffne, dann scrollt die Seite nicht seitlich, und nur die Tabelle lässt sich seitlich wischen.

**Fertig, wenn:** Ich kopiere den Link, öffne ihn auf dem Handy oder in einem privaten Fenster, sehe den Plan, ändere ihn am Laptop und sehe die Änderung nach dem Neuladen. Dann erzeuge ich einen neuen Link, und der alte zeigt den Hinweis.

## 5. Vorwoche kopieren ⬜

**Ziel:** Die Filialleiterin übernimmt die Schichten der aktuellen Woche in die nächste und passt nur die Abweichungen an, damit sie einen ähnlichen Plan nicht jede Woche Feld für Feld neu einträgt.

**Nicht im Umfang:** Vorlagen, Kopieren über mehrere Wochen, Kopieren einzelner Tage oder Personen.

**Akzeptanzkriterien:**
- Gegeben die nächste Woche ist leer, wenn ich auf „Aus dieser Woche übernehmen“ tippe, dann stehen dieselben Einträge wie in der aktuellen Woche im Raster.
- Gegeben eine übernommene Woche, wenn ich darin eine Schicht ändere, dann bleibt die aktuelle Woche unverändert.
- Gegeben ein Teammitglied wurde seit dieser Woche entfernt, wenn ich übernehme, dann werden seine Schichten nicht übernommen.
- Negativfall: Gegeben die nächste Woche hat schon Einträge, wenn ich übernehmen will, dann sehe ich einen ganzen deutschen Satz, dass sie überschrieben würden, und kann abbrechen.

**Fertig, wenn:** Ich übernehme die aktuelle Woche in die nächste, ändere dort zwei Felder und sehe, dass die aktuelle Woche gleich geblieben ist.
