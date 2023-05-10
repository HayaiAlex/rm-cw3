﻿define({ entries : {
    "10.1093/bib/bbab128": {
        "abstract": "\"{Essential genes are critical for the growth and survival of any organism. The machine learning approach complements the experimental methods to minimize the resources required for essentiality assays. Previous studies revealed the need to discover relevant features that significantly classify essential genes, improve on the generalizability of prediction models across organisms, and construct a robust gold standard as the class label for the train data to enhance prediction. Findings also show that a significant limitation of the machine learning approach is predicting conditionally essential genes. The essentiality status of a gene can change due to a specific condition of the organism. This review examines various methods applied to essential gene prediction task, their strengths, limitations and the factors responsible for effective computational prediction of essential genes. We discussed categories of features and how they contribute to the classification performance of essentiality prediction models. Five categories of features, namely, gene sequence, protein sequence, network topology, homology and gene ontology-based features, were generated for Caenorhabditis elegans to perform a comparative analysis of their essentiality prediction capacity. Gene ontology-based feature category outperformed other categories of features majorly due to its high correlation with the genes\u2019 biological functions. However, the topology feature category provided the highest discriminatory power making it more suitable for essentiality prediction. The major limiting factor of machine learning to predict essential genes conditionality is the unavailability of labeled data for interest conditions that can train a classifier. Therefore, cooperative machine learning could further exploit models that can perform well in conditional essentiality predictions.Identification of essential genes is imperative because it provides an understanding of the core structure and function, accelerating drug targets\u2019 discovery, among other functions. Recent studies have applied machine learning to complement the experimental identification of essential genes. However, several factors are limiting the performance of machine learning approaches. This review aims to present the standard procedure and resources available for predicting essential genes in organisms, and also highlight the factors responsible for the current limitation in using machine learning for conditional gene essentiality prediction. The choice of features and ML technique was identified as an important factor to predict essential genes effectively.}\",",
        "author": "Aromolaran, Olufemi and Aromolaran, Damilare and Isewon, Itunuoluwa and Oyelade, Jelili",
        "doi": "10.1093/bib/bbab128",
        "eprint": "https://academic.oup.com/bib/article-pdf/22/5/bbab128/40369639/bbab128.pdf",
        "issn": "1477-4054",
        "journal": "Briefings in Bioinformatics",
        "month": "04",
        "note": "bbab128",
        "number": "5",
        "title": "Machine learning approach to gene essentiality prediction: a review",
        "type": "article",
        "url": "https://doi.org/10.1093/bib/bbab128",
        "volume": "22",
        "year": "2021"
    },
    "10.1093/nargab/lqab110": {
        "abstract": "\"{Identifying essential genes on a genome scale is resource intensive and has been performed for only a few eukaryotes. For less studied organisms essentiality might be predicted by gene homology. However, this approach cannot be applied to non-conserved genes. Additionally, divergent essentiality information is obtained from studying single cells or whole, multi-cellular organisms, and particularly when derived from human cell line screens and human population studies. We employed machine learning across six model eukaryotes and 60 381 genes, using 41 635 features derived from the sequence, gene function information and network topology. Within a leave-one-organism-out cross-validation, the classifiers showed high generalizability with an average accuracy close to 80\\\\% in the left-out species. As a case study, we applied the method to Tribolium castaneum and Bombyx mori and validated predictions experimentally yielding similar performances. Finally, using the classifier based on the studied model organisms enabled linking the essentiality information of human cell line screens and population studies.}\",",
        "author": "Beder, Thomas and Aromolaran, Olufemi and D\u00f6nitz, J\u00fcrgen and Tapanelli, Sofia and Adedeji, Eunice\u00a0O and Adebiyi, Ezekiel and Bucher, Gregor and Koenig, Rainer",
        "doi": "10.1093/nargab/lqab110",
        "eprint": "https://academic.oup.com/nargab/article-pdf/3/4/lqab110/41389952/lqab110.pdf",
        "issn": "2631-9268",
        "journal": "NAR Genomics and Bioinformatics",
        "month": "11",
        "note": "lqab110",
        "number": "4",
        "title": "Identifying essential genes across eukaryotes by machine learning",
        "type": "article",
        "url": "https://doi.org/10.1093/nargab/lqab110",
        "volume": "3",
        "year": "2021"
    },
    "10.1371/journal.pone.0242943": {
        "abstract": "Essential gene prediction helps to find minimal genes indispensable for the survival of any organism. Machine learning (ML) algorithms have been useful for the prediction of gene essentiality. However, currently available ML pipelines perform poorly for organisms with limited experimental data. The objective is the development of a new ML pipeline to help in the annotation of essential genes of less explored disease-causing organisms for which minimal experimental data is available. The proposed strategy combines unsupervised feature selection technique, dimension reduction using the Kamada-Kawai algorithm, and semi-supervised ML algorithm employing Laplacian Support Vector Machine (LapSVM) for prediction of essential and non-essential genes from genome-scale metabolic networks using very limited labeled dataset. A novel scoring technique, Semi-Supervised Model Selection Score, equivalent to area under the ROC curve (auROC), has been proposed for the selection of the best model when supervised performance metrics calculation is difficult due to lack of data. The unsupervised feature selection followed by dimension reduction helped to observe a distinct circular pattern in the clustering of essential and non-essential genes. LapSVM then created a curve that dissected this circle for the classification and prediction of essential genes with high accuracy (auROC > 0.85) even with 1% labeled data for model training. After successful validation of this ML pipeline on both Eukaryotes and Prokaryotes that show high accuracy even when the labeled dataset is very limited, this strategy is used for the prediction of essential genes of organisms with inadequate experimentally known data, such as Leishmania sp. Using a graph-based semi-supervised machine learning scheme, a novel integrative approach has been proposed for essential gene prediction that shows universality in application to both Prokaryotes and Eukaryotes with limited labeled data. The essential genes predicted using the pipeline provide an important lead for the prediction of gene essentiality and identification of novel therapeutic targets for antibiotic and vaccine development against disease-causing parasites.",
        "author": "Nandi, Sutanu AND Ganguli, Piyali AND Sarkar, Ram Rup",
        "doi": "10.1371/journal.pone.0242943",
        "journal": "PLOS ONE",
        "month": "11",
        "number": "11",
        "pages": "1-29",
        "publisher": "Public Library of Science",
        "title": "Essential gene prediction using limited gene essentiality information\u2013An integrative semi-supervised machine learning strategy",
        "type": "article",
        "url": "https://doi.org/10.1371/journal.pone.0242943",
        "volume": "15",
        "year": "2020"
    },
    "10.2174/1574893618666230102105652": {
        "abstract": "The essentiality of a gene can be defined at different levels and is context-dependent. Essential protein-coding genes have been well studied. However, the essentiality of non-coding genes is not well characterized. Although experimental technologies, like CRISPR-Cas9, can provide insights into the essentiality of non-coding regions of the genome, scoring the essentiality of noncoding genes in different contexts is still challenging. With machine learning algorithms, the essentiality of protein-coding genes can be estimated well. But the development of these algorithms for non-coding genes was very early. Based on several recent studies, we believe the essentiality of noncoding genes will be a new and fertile ground in bioinformatics. We pointed out some possible research topics in this perspective article.",
        "author": "Ying-Ying Zhang and Wen-Ya Zhang and Xiao-Hong Xin and Pu-Feng Du",
        "doi": "https://doi.org/10.2174/1574893618666230102105652",
        "issn": "2212-392X",
        "journal": "Current Bioinformatics",
        "keywords": "Essential protein-coding genes, non-coding genes, CRISPR-Cas9, machine learning algorithms, bioinformatics, miRNAs.",
        "number": "2",
        "pages": "105-108",
        "title": "Essential Non-coding Genes: A New Playground of Bioinformatics",
        "type": "article",
        "url": "http://dx.doi.org.nottingham.idm.oclc.org/10.2174/1574893618666230102105652",
        "volume": "18",
        "year": "2023"
    },
    "10.3389/fgene.2018.00380": {
        "abstract": "Measuring the essentiality of genes is critically important in biology and medicine. Here we proposed a computational method, GIC (Gene Importance Calculator), which can efficiently predict the essentiality of both protein-coding genes and long noncoding RNAs (lncRNAs) based on only sequence information. For identifying the essentiality of protein-coding genes, GIC outperformed well-established computational scores. In an independent mouse lncRNA dataset, GIC also achieved an exciting performance (AUC",
        "author": "Zeng, Pan and Chen, Ji and Meng, Yuhong and Zhou, Yuan and Yang, Jichun and Cui, Qinghua",
        "doi": "10.3389/fgene.2018.00380",
        "issn": "1664-8021",
        "journal": "Frontiers in Genetics",
        "keywords": "essentiality, protein-coding genes, lncRNAs, prediction, machine learning",
        "title": "Defining Essentiality Score of Protein-Coding Genes and Long Noncoding RNAs",
        "type": "ARTICLE",
        "url": "https://www.frontiersin.org/articles/10.3389/fgene.2018.00380",
        "volume": "9",
        "year": "2018"
    },
    "9585636": {
        "abstract": "Essential proteins are considered the foundation of life as they are indispensable for the survival of living organisms. Computational methods for essential protein discovery provide a fast way to identify essential proteins. But most of them heavily rely on various biological information, especially protein-protein interaction networks, which limits their practical applications. With the rapid development of high-throughput sequencing technology, sequencing data has become the most accessible biological data. However, using only protein sequence information to predict essential proteins has limited accuracy. In this paper, we propose EP-EDL, an ensemble deep learning model using only protein sequence information to predict human essential proteins. EP-EDL integrates multiple classifiers to alleviate the class imbalance problem and to improve prediction accuracy and robustness. In each base classifier, we employ multi-scale text convolutional neural networks to extract useful features from protein sequence feature matrices with evolutionary information. Our computational results show that EP-EDL outperforms the state-of-the-art sequence-based methods. Furthermore, EP-EDL provides a more practical and flexible way for biologists to accurately predict essential proteins. The source code and datasets can be downloaded from https://github.com/CSUBioGroup/EP-EDL.",
        "author": "Li, Yiming and Zeng, Min and Wu, Yifan and Li, Yaohang and Li, Min",
        "doi": "10.1109/TCBB.2021.3122294",
        "journal": "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
        "keywords": "Deep learning, essential protein prediction, ensemble learning, evolutionary information, PSSM",
        "number": "6",
        "pages": "3263-3271",
        "title": "Accurate Prediction of Human Essential Proteins Using Ensemble Deep Learning",
        "type": "ARTICLE",
        "volume": "19",
        "year": "2022"
    },
    "Aromolaran_2021": {
        "abstract": "Essential genes are subset of genes required by an organism for growth and sustenance of life and as well responsible for phenotypic changes when their activities are altered. They have been utilized as drug targets, disease control agent, etc. Essential genes have been widely identified especially in microorganisms, due to the extensive experimental studies on some of them such as Escherichia coli and Saccharomyces cerevisiae. Experimental approach has been a reliable method to identify essential genes. However, it is complex, costly, labour and time intensive. Therefore, computational approach has been developed to complement the experimental approach in order to minimize resources required for essentiality identification experiments. Machine learning approaches have been widely used to predict essential genes in model organisms using different categories of features with varying degrees of accuracy and performance. However, previous studies have not established the most important categories of features that provide the distinguishing power in machine learning essentiality predictions. Therefore, this study evaluates the discriminating strength of major categories of features used in essential gene prediction task as well as the factors responsible for effective computational prediction. Four categories of features were considered and k- fold cross-validation machine learning technique was used to build the classification model. Our results show that ontology features with an AUROC score of 0.936 has the most discriminating power to classify essential and non-essential genes. This studyconcludes that more ontology related features will further improve the performance of machine learning approach and also sensitivity, precision and AUPRC are realistic measures of performance in essentiality prediction.",
        "author": "Olufemi Aromolaran and Jelili Oyelade and Ezekiel Adebiyi",
        "doi": "10.1088/1755-1315/655/1/012019",
        "journal": "IOP Conference Series: Earth and Environmental Science",
        "month": "feb",
        "number": "1",
        "pages": "012019",
        "publisher": "IOP Publishing",
        "title": "Performance evaluation of features for gene essentiality prediction",
        "type": "article",
        "url": "https://dx.doi.org/10.1088/1755-1315/655/1/012019",
        "volume": "655",
        "year": "2021"
    },
    "FREISCHEM202213": {
        "abstract": "The identification of essential genes, i.e. those that impair cell survival when deleted, requires large growth assays of knock-out strains. The complexity and cost of such experiments has triggered a growing interest in computational methods for prediction of gene essentiality. In the case of metabolic genes, Flux Balance Analysis (FBA) is widely employed to predict essentiality under the assumption that cells maximize their growth rate. However, this approach assumes that knock-out strains optimize the same objectives as the wild-type, which excludes cases in which deletions cause large physiological changes to meet other objectives for survival. Here, we resolve this limitation with a novel machine learning approach that predicts essentiality directly from wild-type flux distributions. We first project the wild-type FBA solution onto a mass flow graph, a digraph with reactions as nodes and edge weights proportional to the mass transfer between reactions, and then train binary classifiers on the connectivity of graph nodes. We demonstrate the efficacy of this approach using the most complete metabolic model of Escherichia coli, achieving near state-of-the art prediction accuracy for essential genes. Our approach suggests that wild-type FBA solutions contain enough information to predict essentiality, without the need to assume optimality of deletion strains.",
        "author": "Lilli J Freischem and Mauricio Barahona and Diego A Oyarz\u00fan",
        "doi": "https://doi.org/10.1016/j.ifacol.2023.01.006",
        "issn": "2405-8963",
        "journal": "IFAC-PapersOnLine",
        "keywords": "Gene essentiality, flux balance analysis, metabolism, machine learning",
        "note": "9th IFAC Conference on Foundations of Systems Biology in Engineering FOSBE 2022",
        "number": "23",
        "pages": "13-18",
        "title": "Prediction of gene essentiality using machine learning and genome-scale metabolic models",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S240589632300006X",
        "volume": "55",
        "year": "2022"
    },
    "ZHANG20222657": {
        "abstract": "Long non-coding RNAs (lncRNAs) play important roles in many biological processes. Knocking out or knocking down some lncRNAs will lead to lethality or infertility. These lncRNAs are called essential lncRNAs. Knowledges of essential lncRNAs are important in establishing minimal genomes of living cells, developing drug therapies and early diagnostic approaches for complex diseases. However, existing databases focus on collecting essential coding genes. Essential non-coding gene records are rare in existing databases. A comprehensive collection of essential non-coding genes, particularly essential lncRNA genes, is demanded. We manually curated 207 essential lncRNAs from literatures for establishing a database on essential lncRNAs, which is named as dbEssLnc (Database of essential lncRNAs). The dbEssLnc database has a web-based user-friendly interface for the users to browse, to search, to visualize and to blast search records in the database. The dbEssLnc database is freely accessible at https://esslnc.pufengdu.org. All data and source codes for mirroring the dbEssLnc database have been deposited in GitHub (https://github.com/yyZhang14/dbEssLnc).",
        "author": "Ying-Ying Zhang and Wen-Ya Zhang and Xiao-Hong Xin and Pu-Feng Du",
        "doi": "https://doi.org/10.1016/j.csbj.2022.05.043",
        "issn": "2001-0370",
        "journal": "Computational and Structural Biotechnology Journal",
        "keywords": "Essential lncRNA, Database, Knockout, Knockdown, dbEssLnc",
        "pages": "2657-2663",
        "title": "dbEssLnc: A manually curated database of human and mouse essential lncRNA genes",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S2001037022001982",
        "volume": "20",
        "year": "2022"
    }
}});