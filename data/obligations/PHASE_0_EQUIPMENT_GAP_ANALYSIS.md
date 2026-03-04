# Phase 0: Equipment Catalog Gap Analysis

## Purpose

Audit the equipment catalog against plan criteria: **robust**, **relevant**, **applicable**. Equipment is the primary constraint; standards and obligations must be directly applicable to the catalog.

## 1. Current State

### 1.1 Ontology Cohorts (`ontology/cohorts/`)

| Cohort | Equipment Types | Standards Mapped |
|--------|-----------------|------------------|
| Metrology | Analytical Balance, Microbalance, Force/Torque Tester, Handheld Dimensional Tool, CMM, Optical Measurement System, Environmental Probe, Particle Counter, Surface Profilometer, Universal Testing Machine | STD_USP1058, STD_ISO17025, STD_ISO10360, STD_ISO14644, STD_ISO25178, STD_ASTM_E4 |
| Sterilization | Steam Sterilizer (Pre-Vacuum), Steam Sterilizer (Gravity), Ethylene Oxide Sterilizer, EtO Aeration System, Radiation (Gamma/E-Beam), VHP Decontamination System, Dry Heat Oven | STD_ISO17665, STD_ISO11135, STD_ISO11137, STD_ISO14937 |
| Packaging | Heat Sealer, Tray Sealer, Blister Sealer, Form-Fill-Seal Machine, Cartoner, Case Packer, Shrink Wrapper | STD_ISO11607 |
| Facilities & Utilities | Cleanroom HVAC, HEPA Filter, EMS, DP Monitor, Compressed Air System, Nitrogen Generator, Vacuum System, Process Chiller, Purified Water System | STD_ISO14644, STD_ISO8573, STD_USP1231 |
| Inspection & Test | Vision Inspection, X-Ray Inspection, Metal Detector, Checkweigher, Leak Tester, Burst Tester, Seal Strength Tester, Dye Penetration Tester, Barcode Verifier | STD_ISO11607, STD_QMS |
| Assembly & Joining | Automated Assembly Cell, Press-Fit Station, Crimping Machine, Heat Staking Machine, Adhesive Dispenser, Torque Fastening System | STD_QMS |
| Cold Chain & Storage | Refrigerator, Freezer, Ultra-Low Freezer, Cryogenic Storage, Controlled-Rate Freezer | STD_TEMP_CONTROL_STORAGE, STD_HUMAN_TISSUE_STORAGE |

### 1.2 Equipment–Standards Map (`data/mappings/equipment_standards_map.csv`)

- **Equipment subtypes**: 80+ distinct types (e.g., Injection Molding Machine, CNC Machining Center, Heat Sealing Equipment)
- **Naming**: Uses display names (e.g., "Heat Sealing Equipment") vs ontology short names (e.g., "Heat Sealer")
- **Coverage**: Map includes molding, extrusion, machining, grinding, assembly, packaging, sterilization, cold chain, facilities, metrology, analytical (HPLC, GC/MS, TOC, pH), IVD

### 1.3 Gaps Identified

| Gap | Description | Recommendation |
|-----|-------------|----------------|
| **Naming alignment** | `equipment_standards_map.equipment_subtype` (e.g., "Heat Sealing Equipment") vs `ontology` equipment_type (e.g., "Heat Sealer") | Create canonical mapping; resolver uses ontology terms |
| **Missing cohorts in ontology** | Molding, extrusion, machining, analytical lab, IVD not in ontology cohorts | Add cohorts: Manufacturing, Analytical, IVD; or expand existing |
| **Equipment breadth** | Ontology has ~40 types; map has ~80; plan requires majority of off-the-shelf US medical device equipment | Expand ontology to include: molding, extrusion, CNC, grinding, HPLC, GC/MS, incubators, centrifuges, IVD analyzers |
| **Biosafety cabinets** | NSF 49 applies to BSC; no BSC in ontology | Add BSC to Facilities & Utilities or new Biocontainment cohort |
| **Washer-disinfectors** | ISO 15883; map has "Washer-Disinfector"; ontology has none | Add to Sterilization or new Decontamination cohort |

## 2. Robustness Assessment

- **Current**: 7 cohorts, ~40 equipment types in ontology
- **Target**: Majority of off-the-shelf, commercially available equipment used by US medical device manufacturers
- **Gap**: Missing manufacturing (molding, extrusion, machining), analytical (HPLC, GC, spectrophotometer, incubator), IVD (chemistry, hematology), washer-disinfectors, BSC

## 3. Relevance Assessment

- **Current**: All ontology equipment has standards mapped
- **Target**: Equipment supporting regulated medical device manufacturing processes
- **Assessment**: Ontology is relevant; map extends to manufacturing and lab equipment

## 4. Applicability Assessment

- **Current**: All catalog equipment requires IQ/OQ/PQ per plan
- **Target**: Only equipment requiring qualification for regulated US medical device manufacturing
- **Assessment**: No general office equipment; all listed equipment is qualification-relevant

## 5. Phase 0.2–0.4 Execution (Completed)

1. **Ontology cohorts expanded** — added:
   - **Analytical** (`ontology/cohorts/analytical.csv`): HPLC System, GC/MS System, FTIR Spectrometer, UV-Vis Spectrophotometer, TOC Analyzer, pH Measurement System, Conductivity Measurement System, Laboratory Incubator, CO2 Incubator, Benchtop Centrifuge, Refrigerated Centrifuge, Microplate Reader
   - **Decontamination** (`ontology/cohorts/decontamination.csv`): Washer-Disinfector, Ultrasonic Cleaner
   - **Manufacturing** (`ontology/cohorts/manufacturing.csv`): Injection Molding Machine, Medical Extrusion Line, CNC Machining Center, CNC Turning Center, Laser Cutting System
   - **IVD** (`ontology/cohorts/ivd.csv`): Clinical Chemistry Analyzer, Hematology Analyzer, Blood Gas Analyzer
   - **Facilities & Utilities**: added Biosafety Cabinet

2. **Resolver**: No changes required; uses ontology as source of truth

3. **Equipment–standards mapping**: Existing `data/mappings/equipment_standards_map.csv` remains as reference; obligations use ontology cohort + equipment_type for resolver selection
