# Website
Official repository for the TLMoto website of Instituto Superior Técnico.
This project serves as the hub for showcasing events, resources, and updates related to Técnico Lisboa's TLMoto initiative.

# Index
1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Contributing](#contributing)
4. [Update Information](#update-information)

## Project Structure
**[TO DO]**
```
.
├── components/
├── pages/
│   ├── garage/
│   │   ├── details/
│   │   ├── index.js
│   ├── team/
│   │   ├── [year].js
│   │   ├── index.js


```

## Getting Started

## Contributing

## Update Information

### Add New Team
**To add a new team in the Team page, the process is mostly automatized for displaying, with the following structure after adding:**

components/<br>
pages/<br>
public/<br>
├── images/<br>
│   ├── team/<br>
│   │   ├── 2022/<br>
│   │   ├── 2023/<br>
│   │   ├── 2024/<br>
│   │   ├── [NEW_YEAR]/<br>
│   │   │   ├── 1 - [AREA_1]/<br>
│   │   │   │   ├── 1 - [member1.webp]/<br>
│   │   │   │   ├── 1 - [member1_card.webp]/<br>
│   │   │   │   ├── 2 - [member2.webp]/<br>
│   │   │   │   ├── 2 - [member2_card.webp]/<br>
│   │   │   │   ├── ...<br>
│   │   │   ├── 2 - [AREA_2]/<br>
│   │   │   ├── ...<br>
│   │   │   ├── team_[NEW_YEAR].webp<br>

**To create these new folders and organize the content correctly please follow the steps below:**

1. Create a new folder in the directory ```public\images\team``` with the year of the team. 

    For example: ```public\images\team\2030```.

2. Inside the new folder, insert the team picture in following format:

- team_[year].webp

    For example: ```public\images\team\2030\team_2030.webp```.

3. Inside the new folder, create folders for each of the areas of the team in the following format:
- [number_in_order] - [area_name]

    For example: ```public\images\team\2030\1 - aero``` and ```public\images\team\2030\2 - board```.

    *Note: The number in order is needed to define the order by each of the teams appears in the webpage list*

4. Inside of each area folder, paste the 2 pictures for each member in the following format:

    **For Profile Member Pictures**
- [number_in_order] - [first-name]_[last_name].webp

    For example: ```public\images\team\2030\1 - aero\1 - pedro_neves.webp```.

    **For Card Member Pictures**
- [number_in_order] - [first-name]_[last_name]_card.webp

    For example: ```public\images\team\2030\1 - aero\1 - pedro_neves_card.webp```.

    *Note: The number in order is only needed if the member is required to appear before the others, in cases such as area lider and sub-lider*

5. Check new webpage to see if any issue arises.

    