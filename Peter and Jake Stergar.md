## Key Outcomes

Peter Kopylov from Delight X explored integrating CREA's AI capabilities into their 3D education platform serving 3 million users. The primary use cases identified are: generating 3D objects from text prompts, creating 2D images for textures/backgrounds, and exporting 2D renders of student-created 3D scenes. CREA offers API access across all pricing tiers with over 50 models, proprietary research capabilities, and comprehensive tools including image generation, editing, video, real-time generation, LoRA training, and a node-based workflow system. The platform charges based on credits per generation, with different models consuming varying amounts (e.g., 3 credits for basic generations, more for advanced models like Nano Banana). 
## CREA Platform Capabilities

### Core AI Models and Features

- **Proprietary models**: CREA (K1) trained specifically for creative applications with photorealism strengths; next-generation model launching in ~2 weeks with personalization layer allowing Pinterest-style mood board learning 
- **50+ models available**: Mix of proprietary models and enhanced open-source models with custom LoRAs and post-processing 
- **Real-time generation**: 16 frames per second live image generation from camera/canvas input; extremely credit-efficient (approximately 50 credits for 30 minutes of use) 
- **Image editing suite**: Powered by Nano Banana with extensive functionality including camera angle adjustment, object placement via text prompts, reference images, and sketch-to-image 
- **Video generation**: Available with 5-second and 10-second options at varying credit costs 
- **Staging tool**: Precise 3D scene composition for exporting to 2D renders, though de-emphasized in main UI due to improved editing capabilities; still used by gaming and interior design companies 

### LoRA Training and Personalization

- **Custom LoRA training**: Users can train models on their own image sets (faces, objects, styles) with 10+ images recommended 
- **Multi-LoRA composition**: Can combine multiple LoRAs simultaneously with adjustable weight sliders to control influence; most influential LoRA determined by image count in dataset 
- **Cross-model compatibility**: LoRAs trained in CREA can be used across different base models 
- **Training workflow**: Simple upload interface with automatic recommendations based on image count and resolution; accessible from dedicated "Train" tool 
- **Style reference images**: Alternative to LoRA training for quick style application with adjustable weights 

### Node-Based Workflow System

- **Comprehensive automation**: All CREA capabilities available in node editor for creating repeatable generation sequences 
- **AI workflow agent**: Prompt-to-workflow functionality where AI agent understands best practices and model capabilities to automatically construct workflows; unique feature not yet replicated by competitors 
- **LoRA integration**: Can incorporate trained LoRAs and style references directly into node workflows with weight controls 
- **Marketing content use case**: Example workflow shown with variety of prompts feeding into different image tools with product images for batch content generation 

## Delight X Integration Use Cases

### Primary Requirements

- **3D object generation from prompts**: Enable students to create custom 3D objects within their educational sandbox environments using text descriptions 
- **2D image generation**: Allow creation of textures, floor images, and wall images from prompts to enhance 3D scenes 
- **Scene export to 2D**: Convert student-created 3D scenes into 2D images for sharing and presentation purposes; differs from CREA's typical workflow where 2D is final output versus intermediate representation 
- **Educational context**: Platform serves 3 million users building 3D environments and scenes for educational purposes, primarily sandbox-style learning 

### Technical Integration Approach

- **API-first integration**: Peter envisions using 2-3 API keys to integrate CREA capabilities directly into Delight X platform for B2C users 
- **Minimal workspace licenses**: Integration would not require extensive workspace seats since end-users access via API rather than direct CREA accounts 
- **Exploration phase**: Team wants to test multiple tools from CREA's toolbox to identify best feature set without disrupting existing business model 

## Pricing and Business Model

### Pricing Tiers

- **Individual plans**: Basic, Pro, Max with increasing credit allocations and features 
- **Team plans**: Business (up to 50 people in single workspace, all-inclusive pricing) and Enterprise (better credit margins, higher starting price, multiple workspaces) 
- **API access**: Available across all pricing tiers including individual plans; any generation via API key consumes same credits as direct platform use 
- **Credit system**: Each model/feature consumes specific credit amounts (3 credits for basic Korea generations, higher for Nano Banana, variable for video based on duration) 

### Usage Tracking and Transparency

- **Pricing page breakdown**: Detailed listing of all models with credit costs per generation type 
- **Usage statistics dashboard**: Shows all generations with credit consumption per item; filterable by model type 
- **API key management**: Users can create multiple API keys from settings; each key's usage tracked separately 

## Competitive Landscape

### Direct Competitors

- **Inference aggregators**: [Fal.AI](https://fal.ai) and similar companies that only wrap APIs without proprietary research 
- **Node-only tools**: Replicate (Flora), Weeby/Weave - essentially single-tool offerings matching CREA's node editor but lacking proprietary models and research; CREA built equivalent functionality in one week 
- **FreePic**: Former stock image business that pivoted aggressively to GenAI when Stable Diffusion emerged; incorporates many models but lacks research team, does own inference, and has "clunky and subpar" user experience; has distribution advantage from stock image legacy but not used by design-forward enterprises 

### CREA's Competitive Advantages

- **First-mover innovations**: Pioneered LoRA training and fine-tuning with user interface before widespread adoption; innovations later become industry standard (e.g., Midjourney added training after CREA) 
- **In-house research team**: Proprietary model development with creative-focused training approach; next model will be "best image model" available 
- **Creative-trained datasets**: Models trained by respected creatives during post-training phase; philosophy that traditional GenAI benchmarks are "divorced from actual applications" and creative workflows 
- **Full-stack ownership**: Controls entire stack from model training through inference and application layer; strongest application layer tool in market 
- **Enterprise adoption**: Used by Apple, Amazon, Shopify, Publicis Global - design-forward pioneers versus competitors 
- **Prompt understanding**: K1 model particularly strong with traditional photography and creative direction terminology due to training approach 

### Notable Integrations

- **Shopify**: Early customer with deep productization; all imagery in Shop app generated via CREA; vendors building Shopify stores use CREA integration behind the scenes 
- **Multiple Amazon teams**: Various teams across Amazon using platform 
- **Gaming studios**: Multiple gaming companies utilizing platform, particularly staging tool for precise asset placement 

## Company Background

### History and Funding

- **Founded**: 3 years ago by two founders with creative backgrounds (traditional design and architecture) and Cornell AI research master's degrees 
- **Pre-Stable Diffusion origins**: Founders experimenting with diffusion models before widespread availability and user interfaces existed 
- **Funding**: Series A ~$20M, Series B $55M, total ~$90M raised 
- **Growth trajectory**: Reached 30 million users primarily through product-led growth without marketing team; now scaling enterprise and adding marketing function 
- **Team size**: Approximately 35 people, scaling quickly with historically exclusive product focus 

### Technical Philosophy

- **Creative control focus**: Founders believe current model training approaches lack creative control; prioritize features enabling precise artistic direction 
- **Benchmark skepticism**: Traditional GenAI benchmarks considered disconnected from real creative workflows; prefer evaluation by actual creatives 
- **In-house development**: All models developed internally on own GPUs for efficiency and control 
- **Rapid iteration**: Example of building node editor in one week demonstrates technical velocity 

## Technical Documentation and Resources

### Developer Resources

- **API documentation**: Comprehensive docs at docs.crea with API keys, billing information, and implementation guides 
- **Model listings**: Complete catalog of 50+ models with specifications and credit costs 
- **Usage examples**: Standard documentation structure with authentication, endpoints, and code samples 

### Platform Features Not in API

- **Real-time generation**: Currently not available via API due to technical complexity of serving 16fps generation; requires significant backend infrastructure to support 
- **Future consideration**: Real-time API access may be added but no current timeline 

## Next Steps and Open Items

### For Peter's Evaluation

- Review detailed pricing page to understand credit consumption across different models and use cases 
- Experiment with staging tool (bottom of website) to assess 3D-to-2D export workflow relevance for student scene sharing 
- Test node-based workflow system for potential batch generation scenarios 
- Explore LoRA training capabilities if custom style consistency needed for educational content 

### Questions for Follow-up

- Clarify specific credit budgets and cost projections for 3 million user base integration 
- Determine if staging tool's precision placement capabilities align with educational 3D scene export needs 
- Assess whether upcoming personalization layer (2-week launch) offers value for educational context 
- Evaluate if node workflows could enable teacher-created content templates for students 

## Platform Demonstrations Shown

- **Real-time manga style generation**: Live camera transformation to manga art style; highly engaging and credit-efficient 
- **Kitchen scene editing**: Camera angle adjustment and object placement via text prompts (moving table/chairs, adding bookshelf); iterative refinement approach 
- **Personal LoRA examples**: Jake's face-trained LoRA combined with dog LoRA and Ghibli style; demonstrated weight adjustment and multi-LoRA composition 
- **Node workflow for marketing**: Multi-prompt content generation workflow with product images feeding into various image generation models 
- **Drawing-to-image**: Sketch-based generation where drawn elements (red arrow, lamp sketch) are interpreted and rendered into scene 
