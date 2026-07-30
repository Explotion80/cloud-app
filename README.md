Projekt natywnej aplikacji chmurowej realizowany w architerkturze 3-warstwowej.

## deklaracja architektury - azure
Te projekt został zaplanowany z myślą o usługach PaaS (Platform as a Service) w chmurze Azure.

| Warstwa | Komponent Lokalny | Usługa Azure |
| :--- | :--- | :--- |
| **Presentation** | React 19 (Vite) | Azure Static Web Apps |
| **Application** | API (.NET 9 / Node 24) | Azure App Service |
| **Data** | SQL Server (Dev) | Azure SQL Database (Serverless) |
## Status projektu i dokumentacja
* [x] **Artefakt 1:** Zaplanowano strukturę folderów i diagram C4 (dostępny w `/docs`).
* [x] **Artefakt 2:** Konfiguracja środowiska Docker (w trakcie...).
* [x] **Artefakt 3:** Działająca warstwa prezentacji (React + Vite w Dockerze).
* [x] **Artefakt 4:** Działająca warstwa logiki backendu (.NET 9 + SQL Connection)
* [x] **Artefakt 5:** Trwałość danych i profesjonalny kontrakt API (EF Migrations + DTO + UI Form).
* [x] **Artefakt 6:** Aplikacja wdrożona do Azure.
## Adresy do uruchomienia:
Adres frontend: https://cloud-task-manager-frontend-1-hpbqhaetb4ggc0ec.polandcentral-01.azurewebsites.net/
Adres backend: https://cloud-task-manager-api-1-ekbseygbfta4avc6.polandcentral-01.azurewebsites.net/index.html