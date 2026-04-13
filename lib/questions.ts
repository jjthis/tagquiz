export type QuizQuestion = {
  clue: string
  answer: string
  options: string[]
  difficulty: "easy" | "medium" | "hard"
}




export const QUESTION_BANK: QuizQuestion[] = [
  {
    clue:
      "A recursive tree factorization scheme that privileges a numerically dominant edge on each root-to-leaf frontier, compressing long ancestor chains into a small number of preferred segments while relegating the remainder to subordinate fragments, thereby permitting logarithmic traversal through a stratified hierarchy of structural significance.",
    answer: "heavy-light 분할",
    options: ["heavy-light 분할", "세그먼트 트리", "트리 dp", "링크/컷 트리"],
    difficulty: "medium",
  },
  {
    clue:
      "A bidirectional tree-state propagation framework in which partial contributions are first accumulated in one traversal order and then re-injected through a complementary rerooting pass, so that every vertex can inherit a globally consistent aggregate without rebuilding the entire structure from scratch.",
    answer: "트리에서의 전방향 다이나믹 프로그래밍",
    options: [
      "트리에서의 전방향 다이나믹 프로그래밍",
      "트리에서의 후방향 다이나믹 프로그래밍",
      "rerooting DP",
      "도미네이터 트리",
    ],
    difficulty: "hard",
  },
  {
    clue:
      "A sliding-window extremum maintenance paradigm that replaces repeated rescanning with a disciplined double-ended container, preserving candidate states in monotone order so that range maxima emerge from a continuously refreshed frontier of dominance.",
    answer: "덱을 이용한 구간 최댓값 트릭",
    options: [
      "덱을 이용한 구간 최댓값 트릭",
      "단조 큐를 이용한 최적화",
      "스택을 이용한 구간 최댓값 트릭",
      "세그먼트 트리 비츠",
    ],
    difficulty: "medium",
  },
  {
    clue:
      "A time-layered search structure whose historical versions remain permanently accessible, where each modification spawns a new immutable lineage while sharing the vast majority of untouched nodes through structural persistence.",
    answer: "퍼시스턴트 세그먼트 트리",
    options: [
      "퍼시스턴트 세그먼트 트리",
      "세그먼트 트리 비츠",
      "펜윅 트리",
      "이동 루트 세그먼트 트리",
    ],
    difficulty: "medium",
  },
  {
    clue:
      "A classical modular reconstruction theorem that recovers an integer from multiple coprime congruence classes by synthesizing a unique representative across a product lattice of residues.",
    answer: "중국인의 나머지 정리",
    options: ["중국인의 나머지 정리", "베주 정리", "페르마 소정리", "오일러 정리"],
    difficulty: "easy",
  },
  {
    clue:
      "An offline interval-query ordering technique that arranges requests along a locality-preserving traversal, minimizing structural churn by allowing the maintained state to drift through adjacent configurations rather than being rebuilt per query.",
    answer: "mo's",
    options: ["mo's", "cdq 분할 정복", "오프라인 동적 연결성 판정", "벌크 쿼리 정렬"],
    difficulty: "medium",
  },
  {
    clue:
      "A self-adjusting binary search topology in which frequently accessed elements are repeatedly lifted toward the root through rotations, causing the tree to reshape itself around the empirical access pattern rather than a fixed balance invariant.",
    answer: "스플레이 트리",
    options: ["스플레이 트리", "AVL 트리", "레드블랙 트리", "탑 트리"],
    difficulty: "medium",
  },
  {
    clue:
      "A geometric containment predicate for a polygonal region whose boundary may exhibit inward turns, where the classification of a query point is decided by a carefully oriented crossing analysis over a nonconvex boundary chain.",
    answer: "오목 다각형 내부의 점 판정",
    options: [
      "오목 다각형 내부의 점 판정",
      "볼록 다각형 내부의 점 판정",
      "교차 판정",
      "보로노이 다이어그램",
    ],
    difficulty: "hard",
  },
  {
    clue:
      "A dynamic forest apparatus that alternates between preferred-path exposure and implicit cut-link surgery, enabling connectivity, path queries, and structural reconfiguration under a logarithmic amortized regime.",
    answer: "링크/컷 트리",
    options: ["링크/컷 트리", "탑 트리", "스플레이 트리", "heavy-light 분할"],
    difficulty: "hard",
  },
  {
    clue:
      "A metaheuristic optimization procedure that explores an energy landscape by occasionally accepting adverse transitions under a cooling schedule, thereby escaping shallow local minima through probabilistic thermal relaxation.",
    answer: "담금질 기법",
    options: ["담금질 기법", "유전 알고리즘", "탐욕법", "분기 한정법"],
    difficulty: "easy",
  },
  {
    clue:
      "A dual-purpose hashing-and-pattern-recognition scheme in which rolling fingerprints are advanced through a windowed text stream, allowing substring comparison by compressing positional information into algebraic fingerprints.",
    answer: "라빈–카프",
    options: ["라빈–카프", "KMP", "아호-코라식", "z 알고리즘"],
    difficulty: "medium",
  },
  {
    clue:
      "A dynamic programming architecture for lattice-like combinatorial objects that encodes frontier connectivity as a compact interface signature, propagating compatibility across a sweep line through state compression and topological equivalence classes.",
    answer: "커넥션 프로파일을 이용한 다이나믹 프로그래밍",
    options: [
      "커넥션 프로파일을 이용한 다이나믹 프로그래밍",
      "비트마스크 dp",
      "트리 dp",
      "분할 정복 dp",
    ],
    difficulty: "hard",
  },
  {
    clue:
      "A lower-envelope maintenance structure for affine functions, built so that each query resolves the minimum of a line family by comparing dominance regions across a recursively partitioned coordinate axis.",
    answer: "리–차오 트리",
    options: ["리–차오 트리", "세그먼트 트리", "평면분할 트리", "헐버트 트리"],
    difficulty: "hard",
  },
  {
    clue:
      "An algebraic recurrence-recovery method that reconstructs the shortest linear feedback relation governing a sequence by iteratively refining a candidate annihilator over a field.",
    answer: "벌리캠프–매시",
    options: ["벌리캠프–매시", "선형 계획법", "가우스 소거법", "킨더스 콕스 알고리즘"],
    difficulty: "hard",
  },
  {
    clue:
      "A vector-space basis construction over characteristic-two arithmetic, where every element is normalized against a pivot hierarchy so that XOR-combinations become a compact canonical generating system.",
    answer: "배타적 논리합 기저 (gf(2))",
    options: ["배타적 논리합 기저 (gf(2))", "행렬식 기저", "정수 기저", "최소 생성 집합"],
    difficulty: "medium",
  },
  {
    clue:
      "A retrospective graph-maintenance strategy that answers connectivity under edge insertions and deletions by reversing time, batching structural changes, and evaluating the evolving component relation through a staged offline schedule.",
    answer: "오프라인 동적 연결성 판정",
    options: ["오프라인 동적 연결성 판정", "동적 최소 신장 트리", "정적 연결성 판정", "2-SAT"],
    difficulty: "hard",
  },
  {
    clue:
      "A threshold-structured optimization reduction in which the original objective is transformed into a parametric feasibility decision, and the optimum is extracted by iterating over an auxiliary scalar that governs the combinatorial tradeoff.",
    answer: "aliens 트릭",
    options: ["aliens 트릭", "라그랑주 승수법", "dp 최적화", "이분 탐색"],
    difficulty: "hard",
  },
  {
    clue:
      "An algebra of planar regions in which set-theoretic conjunction, disjunction, and subtraction are implemented through boundary decomposition, intersection tracing, and topological recombination of elementary shape fragments.",
    answer: "도형에서의 불 연산",
    options: ["도형에서의 불 연산", "기하 해싱", "볼록 껍질", "픽의 정리"],
    difficulty: "medium",
  },
  {
    clue:
      "A segment-tree variant whose update logic is governed not merely by lazy propagation but by structural resistance to repeated partial degradation, where nodes are refined only when the local envelope of values forces a controlled descent.",
    answer: "세그먼트 트리 비츠",
    options: ["세그먼트 트리 비츠", "퍼시스턴트 세그먼트 트리", "lazy propagation", "펜윅 트리"],
    difficulty: "hard",
  },
  {
    clue:
      "A conceptual symmetry principle asserting that a structure can be equivalently studied through an inverted or transposed representation, often converting an intractable primal formulation into a more tractable mirrored one.",
    answer: "쌍대성",
    options: ["쌍대성", "대칭성", "불변성", "정규형"],
    difficulty: "easy",
  },
  {
    clue:
      "A planar partition induced by nearest-site dominance, where every cell consists of points whose metric allegiance belongs to a particular generator under the governing distance rule.",
    answer: "보로노이 다이어그램",
    options: ["보로노이 다이어그램", "델로네 삼각분할", "볼록 껍질", "워터쉐드"],
    difficulty: "medium",
  },
  {
    clue:
      "A queue-based optimization pattern that preserves monotonicity among candidate states, ensuring each element is inserted and removed under a disciplined order so the best feasible transition can be queried in constant amortized time.",
    answer: "단조 큐를 이용한 최적화",
    options: [
      "단조 큐를 이용한 최적화",
      "덱을 이용한 구간 최댓값 트릭",
      "스택을 이용한 최적화",
      "세그먼트 트리 비츠",
    ],
    difficulty: "medium",
  },
  {
    clue:
      "A sweeping geometric incremental method that repeatedly advances a rigid frontier across a configuration space, collapsing dominated candidates as if a mechanical blade were clearing obsolete support events from the evolving envelope.",
    answer: "bulldozer 트릭",
    options: ["bulldozer 트릭", "스위핑", "회전 캘리퍼스", "볼록 껍질 트릭"],
    difficulty: "hard",
  },
  {
    clue:
      "A recurrence-computation framework that expresses a linear transition law through polynomial manipulation, enabling fast extraction of the nth term by exploiting the algebraic structure hidden inside the generating relation.",
    answer: "다항식을 이용한 선형점화식 계산",
    options: [
      "다항식을 이용한 선형점화식 계산",
      "행렬 거듭제곱",
      "생성 함수",
      "벌리캠프–매시",
    ],
    difficulty: "hard",
  },
  {
    clue:
      "A multiplicative inverse problem in cyclic algebra where one seeks the exponent hidden behind a modular power map, typically by decomposing the search space into baby and giant strides or related multiplicative partitions.",
    answer: "이산 로그",
    options: ["이산 로그", "이산 지수", "모듈러 역원", "오일러 피 함수"],
    difficulty: "medium",
  },
  {
    clue:
      "A divide-and-conquer paradigm specialized for batched 2D dependency resolution, in which recursion over one axis is intertwined with incremental updates over another to avoid quadratic recomputation.",
    answer: "cdq 분할 정복",
    options: ["cdq 분할 정복", "mo's", "divide and conquer optimization", "스위프 라인"],
    difficulty: "medium",
  },
  {
    clue:
      "A combinatorial independence system equipped with hereditary feasibility and exchange axioms, abstracting the notion of maximal nonredundant structure across vector, graph, and set constraints.",
    answer: "매트로이드",
    options: ["매트로이드", "그래프", "람다 대수", "선형 공간"],
    difficulty: "hard",
  },
  {
    clue:
      "A compressed suffix-indexing machine that organizes every terminal substring of a text into a shared-edge rooted topology, enabling substring navigation by traversing explicit branching points rather than enumerating all suffixes directly.",
    answer: "접미사 트리",
    options: ["접미사 트리", "접미사 배열", "트라이", "Aho-Corasick"],
    difficulty: "medium",
  },
  {
    clue:
      "A graph-theoretic dominance structure rooted at a distinguished source, where each vertex is governed by the unique minimal set of predecessors that must be traversed before the vertex can be reached in any admissible flow.",
    answer: "도미네이터 트리",
    options: ["도미네이터 트리", "스패닝 트리", "탑 트리", "링크/컷 트리"],
    difficulty: "hard",
  },
  {
    clue:
      "A multilevel tree representation that recursively partitions a dynamic forest into clusters separated by interface boundaries, so that path and subtree aggregations can be preserved while the underlying topology undergoes structural surgery.",
    answer: "탑 트리",
    options: ["탑 트리", "링크/컷 트리", "heavy-light 분할", "스플레이 트리"],
    difficulty: "hard",
  },
  {
    clue:
      "A continuous optimization method that repeatedly moves parameters in the direction opposite the local slope, using infinitesimal descent steps to reduce an objective landscape toward a stable basin.",
    answer: "경사 하강법",
    options: ["경사 하강법", "뉴턴 방법", "담금질 기법", "이분 탐색"],
    difficulty: "easy",
  },
  {
    clue:
      "A determinant-style combinatorial identity that converts families of nonintersecting lattice paths into an alternating sum representation, allowing path enumeration to be encoded through linear algebra over structured endpoints.",
    answer: "린드스트롬–게셀–비엔노 보조정리",
    options: [
      "린드스트롬–게셀–비엔노 보조정리",
      "카일리-해밀턴 정리",
      "플뤼커 공식",
      "마클라우린 급수",
    ],
    difficulty: "hard",
  },
  {
    clue:
      "A global minimum-cut procedure for weighted undirected graphs that repeatedly contracts the most tightly bound pairwise structure under a selection rule calibrated to expose the graph's weakest separating bottleneck.",
    answer: "스토어–바그너",
    options: ["스토어–바그너", "크루스칼", "프림", "에드몬즈"],
    difficulty: "hard",
  },
  {
    clue:
      "A valuation theorem for p-adic divisibility of exponentiated differences, asserting that the multiplicity of a prime in a^n - b^n is governed by a refined lifting phenomenon under arithmetic compatibility conditions.",
    answer: "지수승강 보조정리",
    options: ["지수승강 보조정리", "중국인의 나머지 정리", "페르마 소정리", "오일러 정리"],
    difficulty: "hard",
  }
];
// export const QUESTION_BANK: QuizQuestion[] = [
//   {
//     clue:
//       "A hierarchical tree-decomposition paradigm that partitions edges and vertices into structurally heavy and light components so that repeated path and subtree queries collapse into logarithmic traversals through a bounded number of preferred chains.",
//     answer: "heavy-light 분할",
//     options: ["heavy-light 분할", "세그먼트 트리", "트라이", "LCA"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A bidirectional tree dynamic-programming framework in which information is first propagated downward from the root and then reassembled upward through rerooting-style state transitions to obtain every node's perspective in linear or near-linear time.",
//     answer: "트리에서의 전방향 다이나믹 프로그래밍",
//     options: ["트리에서의 전방향 다이나믹 프로그래밍", "위상 정렬", "이분 탐색", "비트마스크 DP"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A range-query optimization pattern that replaces direct maintenance of interval maxima with amortized amortization over a monotone deque, exploiting dominance and evictions to answer sliding-window style extremal queries efficiently.",
//     answer: "덱을 이용한 구간 최댓값 트릭",
//     options: ["덱을 이용한 구간 최댓값 트릭", "이분 탐색", "해시", "플로이드 워셜"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A fully persistent ordered-interval structure that preserves historical versions of segment-tree states, allowing queries to be evaluated against any past snapshot while updates branch the timeline rather than overwrite it.",
//     answer: "퍼시스턴트 세그먼트 트리",
//     options: ["퍼시스턴트 세그먼트 트리", "라빈 카프", "스택", "union-find"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A classical arithmetic reconstruction principle that recovers an integer solution from mutually coprime modular residues by assembling congruence classes into a uniquely determined global representative.",
//     answer: "중국인의 나머지 정리",
//     options: ["중국인의 나머지 정리", "오일러 정리", "페르마 소정리", "유클리드 호제법"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "An offline query-processing technique where intervals are reordered by blocks and endpoint motion is minimized, so that add/remove operations become a controlled pointer-walking routine over the entire query set.",
//     answer: "mo's",
//     options: ["mo's", "세그먼트 트리", "다익스트라", "LCS"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A self-adjusting binary-search-tree variant that performs local rotations after each access so that recently touched elements migrate toward the root, yielding amortized efficiency through adaptive restructuring.",
//     answer: "스플레이 트리",
//     options: ["스플레이 트리", "힙", "벡터", "트라이"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A geometric membership test for a nonconvex polygon whose interior can still be characterized by directional consistency and winding-style reasoning despite the absence of global convexity.",
//     answer: "오목 다각형 내부의 점 판정",
//     options: ["오목 다각형 내부의 점 판정", "볼록 껍질", "최소 외접원", "선분 교차 판정"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A dynamic forest data structure designed to maintain connectivity and path aggregates under link and cut operations, supporting structural edge insertions and deletions while preserving a forest representation.",
//     answer: "링크/컷 트리",
//     options: ["링크/컷 트리", "세그먼트 트리", "KMP", "이진 힙"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A heuristic global-search technique that simulates gradual cooling in a probabilistic energy landscape, occasionally accepting worse states early on to escape local minima before settling into refinement.",
//     answer: "담금질 기법",
//     options: ["담금질 기법", "분할 정복", "최소 컷", "벨만-포드"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A rolling-hash style string comparison method that compresses substrings into modular fingerprints so equality checks become arithmetic comparisons rather than full character-by-character scans.",
//     answer: "라빈–카프",
//     options: ["라빈–카프", "KMP", "Z 알고리즘", "접미사 배열"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A state-compression dynamic-programming template that enumerates boundary profiles across a grid frontier, carrying only the interface configuration between processed and unprocessed regions.",
//     answer: "커넥션 프로파일을 이용한 다이나믹 프로그래밍",
//     options: ["커넥션 프로파일을 이용한 다이나믹 프로그래밍", "비트마스크 DP", "트리 DP", "최단 경로"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A piecewise-linear lower-envelope structure that stores affine functions and answers minimum-at-point queries by maintaining the dominant line over segments of the domain.",
//     answer: "리–차오 트리",
//     options: ["리–차오 트리", "세그먼트 트리", "펜윅 트리", "트라이"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A linear-algebraic sequence-solving framework that transforms recurrence constraints into polynomial or matrix-like identities and then reconstructs the governing rule from sampled terms.",
//     answer: "벌리캠프–매시",
//     options: ["벌리캠프–매시", "카츠–카렐라", "정렬", "최대 유량"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A vector-space basis over characteristic two in which every value is represented as a xor-combination of independent generators, enabling maximum subset xor and linear independence reasoning.",
//     answer: "배타적 논리합 기저 (gf(2))",
//     options: ["배타적 논리합 기저 (gf(2))", "최소 공배수", "그래프 칼라링", "세그먼트 트리"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "An offline connectivity-maintenance method that resolves edge-deletion dynamics by reversing time, batching intervals, and using divide-and-conquer style reconstruction of component states.",
//     answer: "오프라인 동적 연결성 판정",
//     options: ["오프라인 동적 연결성 판정", "최단 경로", "트리 지름", "이분 매칭"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "An optimization trick that converts a quadratic or parametric objective into a search over answer space, repeatedly testing feasibility until the extremal value is isolated.",
//     answer: "aliens 트릭",
//     options: ["aliens 트릭", "모노톤 스택", "백트래킹", "A*"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A geometric/boolean manipulation regime in which regions are represented as set-like entities and combined through logical operators such as union, intersection, and complement in planar space.",
//     answer: "도형에서의 불 연산",
//     options: ["도형에서의 불 연산", "도형의 넓이", "최소 신장 트리", "문자열 압축"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A segment-tree augmentation technique that maintains piecewise monotonic convexity-like constraints, pushing lazy corrections only when a node's linear bounds are violated by updates.",
//     answer: "세그먼트 트리 비츠",
//     options: ["세그먼트 트리 비츠", "느리게 갱신하는 세그트리", "트라이", "이분 탐색"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A symmetry-based dualization principle that replaces a primal object with a counterpart whose combinatorial or geometric properties encode the original problem from a transformed viewpoint.",
//     answer: "쌍대성",
//     options: ["쌍대성", "단조성", "연속성", "완전탐색"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A diagrammatic partition of the plane into cells defined by nearest-site dominance, where every location inherits the identity of the generator point minimizing Euclidean distance.",
//     answer: "보로노이 다이어그램",
//     options: ["보로노이 다이어그램", "Delaunay triangulation", "최소 스패닝 트리", "오목 다각형"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A greedy optimization pattern that maintains monotonic candidates in a deque-like invariant so each index enters and leaves a bounded number of times while extremal transitions are computed.",
//     answer: "단조 큐를 이용한 최적화",
//     options: ["단조 큐를 이용한 최적화", "이진 탐색", "정수론", "플로이드 워셜"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A geometric sweeping technique that rotates or pivots a line through a set of points, leveraging pairwise event ordering to extract critical combinatorial or proximity information.",
//     answer: "bulldozer 트릭",
//     options: ["bulldozer 트릭", "스위핑", "푸리에 변환", "위상 정렬"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A method for evaluating linear recurrences by encoding the recurrence as a polynomial relation and using algebraic composition to jump to the nth term without simulating all previous steps.",
//     answer: "다항식을 이용한 선형점화식 계산",
//     options: ["다항식을 이용한 선형점화식 계산", "누적합", "이분 탐색", "그리디"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A number-theoretic discrete inversion problem in which one seeks the exponent that maps a generator to a target residue under modular multiplication, often solved with baby-step giant-step or related algebraic methods.",
//     answer: "이산 로그",
//     options: ["이산 로그", "유클리드 호제법", "소수 판정", "CRT"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A divide-and-conquer offline paradigm that recursively splits the query/update timeline and propagates influence through subproblems while preserving contribution accounting across boundaries.",
//     answer: "cdq 분할 정복",
//     options: ["cdq 분할 정복", "병합 정렬", "벨만-포드", "Kruskal"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "An abstract combinatorial optimization framework where feasible sets obey exchange axioms, enabling greedy selection to be proven correct far beyond simple graph structures.",
//     answer: "매트로이드",
//     options: ["매트로이드", "그래프", "트리", "큐"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A tree-structured indexing representation of all suffixes of a string, compressed so that repeated prefixes share paths and substring membership can be tested through path descent.",
//     answer: "접미사 트리",
//     options: ["접미사 트리", "접미사 배열", "트라이", "KMP"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A directed-graph structural analysis object that identifies dominance relationships in control-flow style reachability, compressing all paths from the entry node into a hierarchy of mandatory ancestors.",
//     answer: "도미네이터 트리",
//     options: ["도미네이터 트리", "신장 트리", "링크컷 트리", "최소 공통 조상"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A dynamic forest framework built from preferred-path decomposition and auxiliary trees, often introduced as a more theory-rich alternative to splay-centric dynamic tree maintenance.",
//     answer: "탑 트리",
//     options: ["탑 트리", "링크/컷 트리", "트라이", "세그먼트 트리"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A first-order iterative optimization rule that repeatedly updates parameters in the negative gradient direction, trading exact symbolic solution for scalable descent on smooth objectives.",
//     answer: "경사 하강법",
//     options: ["경사 하강법", "이분 탐색", "다익스트라", "유니온 파인드"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A graph-theoretic determinant-based identity that counts or characterizes combinatorial objects through a matrix expansion, often appearing in planar matching enumeration and related algebraic proofs.",
//     answer: "린드스트롬–게셀–비엔노 보조정리",
//     options: ["린드스트롬–게셀–비엔노 보조정리", "최소 컷 정리", "오일러 정리", "체비쇼프 부등식"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A permutation-and-swapping style reduction technique that repeatedly transforms a structure by exchanging adjacent constraints until the target arrangement emerges under maintained invariants.",
//     answer: "스토어–바그너",
//     options: ["스토어–바그너", "힙 정렬", "merge sort", "Kruskal"],
//     difficulty: "hard",
//   },
//   {
//     clue:
//       "A combinatorial principle asserting that sufficiently dense structures force the existence of a guaranteed configuration, typically used as a lower-bound existence lemma in discrete mathematics.",
//     answer: "지수승강 보조정리",
//     options: ["지수승강 보조정리", "피타고라스 정리", "중앙극한정리", "체비쇼프 부등식"],
//     difficulty: "hard",
//   },
// ];
// export const QUESTION_BANK: QuizQuestion[] = [
//   {
//     clue: "수식적 성질과 정리 기반으로 문제를 해석하는 가장 범용적인 학문 태그",
//     answer: "수학",
//     options: ["수학", "정수론", "조합론", "기하학"],
//     difficulty: "easy",
//   },
//   {
//     clue: "알고리즘보다 예외 처리와 코드 정확성이 핵심인 실전형 태그",
//     answer: "구현",
//     options: ["구현", "시뮬레이션", "애드 혹", "파싱"],
//     difficulty: "easy",
//   },
//   {
//     clue: "상태와 점화식을 정의해 최적해를 누적하는 대표 최적화 패러다임",
//     answer: "다이나믹 프로그래밍",
//     options: ["다이나믹 프로그래밍", "그리디 알고리즘", "분할 정복", "백트래킹"],
//     difficulty: "easy",
//   },
//   {
//     clue: "데이터 저장 구조와 연산 효율을 중심으로 다루는 핵심 분야",
//     answer: "자료 구조",
//     options: ["자료 구조", "트리", "집합과 맵", "우선순위 큐"],
//     difficulty: "easy",
//   },
//   {
//     clue: "정점과 간선 관계를 수학적으로 모델링하는 문제 범주",
//     answer: "그래프 이론",
//     options: ["그래프 이론", "트리", "최단 경로", "위상 정렬"],
//     difficulty: "easy",
//   },
//   {
//     clue: "매 순간 최선의 선택이 전체 최적해를 보장하도록 설계하는 기법",
//     answer: "그리디 알고리즘",
//     options: ["그리디 알고리즘", "다이나믹 프로그래밍", "브루트포스 알고리즘", "백트래킹"],
//     difficulty: "easy",
//   },
//   {
//     clue: "문자 패턴, 접두사, 부분 문자열 분석의 핵심 분야",
//     answer: "문자열",
//     options: ["문자열", "파싱", "트라이", "해싱"],
//     difficulty: "easy",
//   },
//   {
//     clue: "모든 가능한 경우를 빠짐없이 시도하는 완전 탐색 접근",
//     answer: "브루트포스 알고리즘",
//     options: ["브루트포스 알고리즘", "백트래킹", "그리디 알고리즘", "구현"],
//     difficulty: "easy",
//   },
//   {
//     clue: "정점 간 연결 관계를 순회하며 성질을 찾는 일반 탐색 분야",
//     answer: "그래프 탐색",
//     options: ["그래프 탐색", "너비 우선 탐색", "깊이 우선 탐색", "최단 경로"],
//     difficulty: "easy",
//   },
//   {
//     clue: "순서를 재배치하여 비교와 탐색 효율을 높이는 전처리 기법",
//     answer: "정렬",
//     options: ["정렬", "이분 탐색", "스위핑", "두 포인터"],
//     difficulty: "easy",
//   },
//   {
//     clue: "정형화된 알고리즘보다 문제별 통찰이 중요한 즉흥적 분류",
//     answer: "애드 혹",
//     options: ["애드 혹", "구현", "많은 조건 분기", "해 구성하기"],
//     difficulty: "medium",
//   },
//   {
//     clue: "도형, 거리, 각도, 면적의 성질을 계산하는 수학 분야",
//     answer: "기하학",
//     options: ["기하학", "수학", "선형대수학", "미적분학"],
//     difficulty: "medium",
//   },
//   {
//     clue: "사이클이 없는 연결 구조로 계층 관계를 표현하는 그래프 특수형",
//     answer: "트리",
//     options: ["트리", "그래프 이론", "자료 구조", "트라이"],
//     difficulty: "easy",
//   },
//   {
//     clue: "약수, 소수, 합동식 등 정수의 구조적 성질을 다루는 분야",
//     answer: "정수론",
//     options: ["정수론", "수학", "조합론", "유클리드 호제법"],
//     difficulty: "medium",
//   },
//   {
//     clue: "구간을 계층적으로 분할하여 빠른 질의와 갱신을 지원하는 구조",
//     answer: "세그먼트 트리",
//     options: ["세그먼트 트리", "느리게 갱신되는 세그먼트 트리", "희소 배열", "우선순위 큐"],
//     difficulty: "easy",
//   },
//   {
//     clue: "정렬된 답의 후보 공간을 절반씩 줄여가는 로그 탐색 기법",
//     answer: "이분 탐색",
//     options: ["이분 탐색", "매개 변수 탐색", "삼분 탐색", "정렬"],
//     difficulty: "easy",
//   },
//   {
//     clue: "정답의 존재를 증명하는 대신 직접 구조를 만들어내는 유형",
//     answer: "해 구성하기",
//     options: ["해 구성하기", "애드 혹", "구현", "백트래킹"],
//     difficulty: "medium",
//   },
//   {
//     clue: "앞에서부터의 누적 정보를 활용해 구간 계산을 상수 시간화하는 기법",
//     answer: "누적 합",
//     options: ["누적 합", "차분 배열 트릭", "세그먼트 트리", "슬라이딩 윈도우"],
//     difficulty: "easy",
//   },
//   {
//     clue: "덧셈 뺄셈 곱셈 나눗셈 자체가 핵심이 되는 가장 기초 연산 태그",
//     answer: "사칙연산",
//     options: ["사칙연산", "수학", "구현", "정수론"],
//     difficulty: "easy",
//   },
//   {
//     clue: "문제에서 주어진 과정을 그대로 코드로 재현하는 절차 기반 접근",
//     answer: "시뮬레이션",
//     options: ["시뮬레이션", "구현", "애드 혹", "그래프 탐색"],
//     difficulty: "easy",
//   },
//   {
//     clue: "원소 존재 여부와 키-값 대응을 빠르게 처리하는 구조 범주",
//     answer: "집합과 맵",
//     options: ["집합과 맵", "해싱", "자료 구조", "트리를 사용한 집합과 맵"],
//     difficulty: "easy",
//   },
//   {
//     clue: "경우의 수 계산과 선택 조합을 분석하는 수학 세부 분야",
//     answer: "조합론",
//     options: ["조합론", "확률론", "수학", "정수론"],
//     difficulty: "medium",
//   },
//   {
//     clue: "레벨 순으로 퍼져나가며 탐색하는 큐 기반 그래프 순회",
//     answer: "너비 우선 탐색",
//     options: ["너비 우선 탐색", "깊이 우선 탐색", "그래프 탐색", "데이크스트라"],
//     difficulty: "easy",
//   },
//   {
//     clue: "핵심 알고리즘보다 복잡한 예외 분기 처리가 본질인 유형",
//     answer: "많은 조건 분기",
//     options: ["많은 조건 분기", "구현", "애드 혹", "시뮬레이션"],
//     difficulty: "medium",
//   },
//   {
//     clue: "부분집합 상태를 비트 단위로 압축하여 표현하는 기법",
//     answer: "비트마스킹",
//     options: ["비트마스킹", "비트 집합", "비트필드를 이용한 다이나믹 프로그래밍", "해싱"],
//     difficulty: "medium",
//   },
//   {
//     clue: "가능한 한 깊게 파고든 뒤 되돌아오는 재귀형 탐색",
//     answer: "깊이 우선 탐색",
//     options: ["깊이 우선 탐색", "너비 우선 탐색", "그래프 탐색", "백트래킹"],
//     difficulty: "easy",
//   },
//   {
//     clue: "출발점에서 각 정점까지의 최소 비용을 구하는 문제 범주",
//     answer: "최단 경로",
//     options: ["최단 경로", "데이크스트라", "플로이드–워셜", "최소 스패닝 트리"],
//     difficulty: "medium",
//   },
//   {
//     clue: "해시 함수 기반 평균 상수 시간 집합 조회 구조",
//     answer: "해시를 사용한 집합과 맵",
//     options: ["해시를 사용한 집합과 맵", "집합과 맵", "해싱", "트리를 사용한 집합과 맵"],
//     difficulty: "medium",
//   },
//   {
//     clue: "양의 가중치 그래프 최단 경로의 대표 우선순위 기반 알고리즘",
//     answer: "데이크스트라",
//     options: ["데이크스트라", "최단 경로", "플로이드–워셜", "너비 우선 탐색"],
//     difficulty: "medium",
//   },
//   {
//     clue: "정렬된 이벤트 축을 따라 변화 지점을 처리하는 선형 주사 기법",
//     answer: "스위핑",
//     options: ["스위핑", "정렬", "두 포인터", "슬라이딩 윈도우"],
//     difficulty: "hard",
//   },
//   {
//     clue: "서로소 집합을 합치고 대표를 찾는 연결성 관리 구조",
//     answer: "분리 집합",
//     options: ["분리 집합", "자료 구조", "트리", "최소 스패닝 트리"],
//     difficulty: "easy",
//   },
//   {
//     clue: "불가능한 선택지를 중간에 가지치기하며 완전 탐색을 줄이는 방식",
//     answer: "백트래킹",
//     options: ["백트래킹", "브루트포스 알고리즘", "깊이 우선 탐색", "비트마스킹"],
//     difficulty: "medium",
//   },
//   {
//     clue: "트리 구조 위에서 서브트리 상태를 점화식으로 계산하는 DP",
//     answer: "트리에서의 다이나믹 프로그래밍",
//     options: ["트리에서의 다이나믹 프로그래밍", "다이나믹 프로그래밍", "트리", "최소 공통 조상"],
//     difficulty: "hard",
//   },
//   {
//     clue: "항상 우선순위가 가장 높은 원소를 먼저 꺼내는 힙 기반 구조",
//     answer: "우선순위 큐",
//     options: ["우선순위 큐", "스택", "덱", "세그먼트 트리"],
//     difficulty: "easy",
//   },
//   {
//     clue: "문자열이나 입력 형식을 규칙에 맞게 구조화하여 읽는 과정",
//     answer: "파싱",
//     options: ["파싱", "문자열", "구현", "정규 표현식"],
//     difficulty: "medium",
//   },
//   {
//     clue: "정답 판별 함수를 기반으로 값의 가능 범위를 탐색하는 기법",
//     answer: "매개 변수 탐색",
//     options: ["매개 변수 탐색", "이분 탐색", "삼분 탐색", "그리디 알고리즘"],
//     difficulty: "medium",
//   },
//   {
//     clue: "균형 트리 기반으로 정렬된 순서를 유지하는 집합 구조",
//     answer: "트리를 사용한 집합과 맵",
//     options: ["트리를 사용한 집합과 맵", "집합과 맵", "해시를 사용한 집합과 맵", "트리"],
//     difficulty: "medium",
//   },
//   {
//     clue: "상대의 행동까지 고려해 승패 전략을 계산하는 수학적 분야",
//     answer: "게임 이론",
//     options: ["게임 이론", "확률론", "다이나믹 프로그래밍", "브루트포스 알고리즘"],
//     difficulty: "medium",
//   },
//   {
//     clue: "문제를 더 작은 독립 부분으로 쪼개 해결 후 병합하는 패러다임",
//     answer: "분할 정복",
//     options: ["분할 정복", "다이나믹 프로그래밍", "그리디 알고리즘", "백트래킹"],
//     difficulty: "easy",
//   },
//   {
//     clue: "사건의 가능성과 기대값을 계산하는 수학 기반 분석 분야",
//     answer: "확률론",
//     options: ["확률론", "조합론", "수학", "게임 이론"],
//     difficulty: "medium",
//   },
//   {
//     clue: "후입선출 방식으로 최근 상태를 우선 처리하는 선형 구조",
//     answer: "스택",
//     options: ["스택", "덱", "우선순위 큐", "큐"],
//     difficulty: "easy",
//   },
//   {
//     clue: "양 끝 인덱스를 움직이며 구간 조건을 만족시키는 선형 기법",
//     answer: "두 포인터",
//     options: ["두 포인터", "슬라이딩 윈도우", "이분 탐색", "스위핑"],
//     difficulty: "easy",
//   },
//   {
//     clue: "상태 집합을 비트 단위 정수로 압축한 DP 고급 형태",
//     answer: "비트필드를 이용한 다이나믹 프로그래밍",
//     options: ["비트필드를 이용한 다이나믹 프로그래밍", "비트마스킹", "다이나믹 프로그래밍", "배낭 문제"],
//     difficulty: "hard",
//   },
//   {
//     clue: "구간 갱신을 즉시 전파하지 않고 필요 시 미루는 세그트리 최적화",
//     answer: "느리게 갱신되는 세그먼트 트리",
//     options: ["느리게 갱신되는 세그먼트 트리", "세그먼트 트리", "희소 배열", "누적 합"],
//     difficulty: "medium",
//   },
//   {
//     clue: "주어진 수가 소수인지 판별하는 수론 기반 연산 태그",
//     answer: "소수 판정",
//     options: ["소수 판정", "에라토스테네스의 체", "정수론", "유클리드 호제법"],
//     difficulty: "medium",
//   },
//   {
//     clue: "네트워크에서 시작점과 도착점 사이의 최대 전달량 계산",
//     answer: "최대 유량",
//     options: ["최대 유량", "최소 비용 최대 유량", "이분 매칭", "최단 경로"],
//     difficulty: "hard",
//   },
//     {
//       clue: "정점 집합을 두 개의 독립된 파트로 분리하여 모든 간선이 서로 다른 파트만을 연결하도록 구성되는 그래프의 특수 구조 성질",
//       answer: "이분 그래프",
//       options: ["이분 그래프", "평면 그래프", "함수형 그래프", "방향 비순환 그래프"],
//       difficulty: "medium",
//     },
//     {
//       clue: "트리 경로 질의를 로그 제곱 수준으로 분해하기 위해 무거운 간선 기준으로 체인을 형성하는 경로 분할 최적화 기법",
//       answer: "heavy-light 분할",
//       options: ["heavy-light 분할", "센트로이드 분할", "트리 압축", "최소 공통 조상"],
//       difficulty: "hard",
//     },
//     {
//       clue: "꼭짓점 순서를 따라 외적의 누적합을 이용하여 단순 다각형의 부호 있는 면적을 계산하는 기하 공식 기반 태그",
//       answer: "다각형의 넓이",
//       options: ["다각형의 넓이", "기하학", "볼록 껍질", "그린 정리"],
//       difficulty: "medium",
//     },
//     {
//       clue: "유량 네트워크에서 최대 흐름의 값이 최소 컷의 용량과 정확히 일치함을 보장하는 네트워크 이론의 핵심 정리",
//       answer: "최대 유량 최소 컷 정리",
//       options: ["최대 유량 최소 컷 정리", "최대 유량", "서큘레이션", "최소 비용 최대 유량"],
//       difficulty: "hard",
//     },
//     {
//       clue: "트리의 중심 정점을 반복적으로 기준점으로 삼아 재귀 분할함으로써 거리 기반 질의를 효율화하는 계층 분해 기법",
//       answer: "센트로이드 분할",
//       options: ["센트로이드 분할", "heavy-light 분할", "센트로이드", "트리 압축"],
//       difficulty: "hard",
//     },
//     {
//       clue: "속도, 힘, 운동량, 충돌, 에너지 보존 등 현실 세계의 물리 법칙을 수식으로 모델링하는 문제 분류",
//       answer: "물리학",
//       options: ["물리학", "수학", "기하학", "수치해석"],
//       difficulty: "medium",
//     },
//     {
//       clue: "모든 간선을 정확히 한 번씩만 지나는 경로 또는 순환의 존재 조건을 차수 기반으로 판정하는 그래프 이론 태그",
//       answer: "오일러 경로",
//       options: ["오일러 경로", "오일러 경로 테크닉", "위상 정렬", "최단 경로"],
//       difficulty: "medium",
//     },
//     {
//       clue: "소수 모듈러 환경에서 거듭제곱 연산을 단순화하는 a^(p-1)=1 형태의 합동식 기반 핵심 정리",
//       answer: "페르마의 소정리",
//       options: ["페르마의 소정리", "오일러 피 함수", "중국인의 나머지 정리", "뤼카 정리"],
//       difficulty: "medium",
//     },
//     {
//       clue: "간선 가중치가 0 또는 1만 존재할 때 덱을 이용해 선형에 가깝게 최단 거리를 계산하는 BFS 확장 기법",
//       answer: "0-1 너비 우선 탐색",
//       options: ["0-1 너비 우선 탐색", "너비 우선 탐색", "데이크스트라", "벨만–포드"],
//       difficulty: "medium",
//     },
//     {
//       clue: "격자나 이미지 상에서 연결된 동일 영역을 시작점으로부터 번지듯 채워 나가는 연결 요소 확장 기법",
//       answer: "플러드 필",
//       options: ["플러드 필", "너비 우선 탐색", "깊이 우선 탐색", "격자 그래프"],
//       difficulty: "easy",
//     },
//     {
//       clue: "특정 정점 또는 간선을 제거했을 때 그래프 연결성이 붕괴되는 취약 지점을 찾는 타잔 계열 핵심 분석",
//       answer: "단절점과 단절선",
//       options: ["단절점과 단절선", "강한 연결 요소", "이중 연결 요소", "선인장"],
//       difficulty: "hard",
//     },
//     {
//       clue: "선입선출 순서를 유지하며 먼저 들어온 작업을 먼저 처리하는 가장 기본적인 선형 자료구조",
//       answer: "큐",
//       options: ["큐", "스택", "덱", "우선순위 큐"],
//       difficulty: "easy",
//     },
//     {
//       clue: "논리식의 각 절이 두 개의 리터럴로만 구성될 때 SCC를 통해 만족 가능성을 판별하는 불 대수 문제",
//       answer: "2-sat",
//       options: ["2-sat", "게임 이론", "배타적 논리합 기저 (gf(2))", "비트마스킹"],
//       difficulty: "hard",
//     },
//     {
//       clue: "상자 수보다 많은 물체를 배치하면 반드시 같은 상자에 두 개 이상 들어감을 보장하는 조합론 원리",
//       answer: "비둘기집 원리",
//       options: ["비둘기집 원리", "포함 배제의 원리", "조합론", "확률론"],
//       difficulty: "medium",
//     },
//     {
//       clue: "모든 정점의 out-degree가 정확히 1인 구조에서 사이클과 꼬리 구조를 분석하는 특수 그래프 모델",
//       answer: "함수형 그래프",
//       options: ["함수형 그래프", "이분 그래프", "평면 그래프", "방향 비순환 그래프"],
//       difficulty: "medium",
//     },
//     {
//       clue: "모든 도시를 정확히 한 번씩 방문하고 시작점으로 복귀하는 최소 비용 순회를 구하는 대표 NP 난해 문제",
//       answer: "외판원 순회 문제",
//       options: ["외판원 순회 문제", "최단 경로", "배낭 문제", "최대 유량"],
//       difficulty: "hard",
//     },
//     {
//       clue: "한 번의 트리 DP 결과를 모든 루트 후보에 대해 재활용하기 위해 부모 방향 정보를 재분배하는 rerooting 기법",
//       answer: "트리에서의 전방향 다이나믹 프로그래밍",
//       options: ["트리에서의 전방향 다이나믹 프로그래밍", "트리에서의 다이나믹 프로그래밍", "센트로이드 분할", "heavy-light 분할"],
//       difficulty: "hard",
//     },
//     {
//       clue: "슬라이딩 윈도우에서 덱을 활용해 각 구간의 최댓값을 선형 시간에 유지하는 단조 구조 최적화 기법",
//       answer: "덱을 이용한 구간 최댓값 트릭",
//       options: ["덱을 이용한 구간 최댓값 트릭", "단조 큐를 이용한 최적화", "슬라이딩 윈도우", "덱"],
//       difficulty: "hard",
//     },
//     {
//       clue: "과거 버전의 모든 상태를 보존한 채 시점별 구간 질의를 가능하게 하는 버전 관리 세그먼트 트리",
//       answer: "퍼시스턴트 세그먼트 트리",
//       options: ["퍼시스턴트 세그먼트 트리", "세그먼트 트리", "머지 소트 트리", "세그먼트 트리 비츠"],
//       difficulty: "hard",
//     },
//     {
//       clue: "간선이 서로 교차하지 않도록 평면 위에 임베딩 가능한 그래프 구조와 면 정보를 다루는 분야",
//       answer: "평면 그래프",
//       options: ["평면 그래프", "쌍대 그래프", "이분 그래프", "선인장"],
//       difficulty: "hard",
//     },
//     {
//       clue: "숫자의 각 자릿수를 상태로 분리하여 조건을 만족하는 수의 개수를 세는 자리 기반 DP 테크닉",
//       answer: "자릿수를 이용한 다이나믹 프로그래밍",
//       options: ["자릿수를 이용한 다이나믹 프로그래밍", "다이나믹 프로그래밍", "비트필드를 이용한 다이나믹 프로그래밍", "조합론"],
//       difficulty: "hard",
//     },
//     {
//       clue: "하나의 정점 제거로는 분리되지 않는 보다 강한 연결 단위를 간선 구조 관점에서 분해하는 그래프 기법",
//       answer: "이중 연결 요소",
//       options: ["이중 연결 요소", "강한 연결 요소", "단절점과 단절선", "선인장"],
//       difficulty: "hard",
//     },
//     {
//       clue: "모든 내각이 180도 미만인 다각형 내부에 점이 포함되는지 방향성과 이분 탐색으로 판정하는 기하 기법",
//       answer: "볼록 다각형 내부의 점 판정",
//       options: ["볼록 다각형 내부의 점 판정", "오목 다각형 내부의 점 판정", "다각형의 넓이", "선분 교차 판정"],
//       difficulty: "hard",
//     },
//     {
//       clue: "1부터 n까지 서로소인 정수의 개수를 세는 곱셈적 수론 함수",
//       answer: "오일러 피 함수",
//       options: ["오일러 피 함수", "페르마의 소정리", "정수론", "모듈로 곱셈 역원"],
//       difficulty: "medium",
//     },
//     {
//       clue: "수열의 계수를 다항식 형태로 인코딩하여 조합적 정보를 추출하는 형식적 거듭제곱급수 기법",
//       answer: "생성 함수",
//       options: ["생성 함수", "조합론", "다항식 보간법", "고속 푸리에 변환"],
//       difficulty: "hard",
//     },
//     {
//       clue: "1부터 n까지 역수의 합으로 대표되는 로그 성장형 특수 수열 분석 태그",
//       answer: "조화수",
//       options: ["조화수", "기댓값의 선형성", "확률론", "수학"],
//       difficulty: "medium",
//     },
//     {
//       clue: "서로소인 여러 모듈러 합동식을 하나의 해로 통합하는 고전 정수론 정리",
//       answer: "중국인의 나머지 정리",
//       options: ["중국인의 나머지 정리", "확장 유클리드 호제법", "페르마의 소정리", "오일러 피 함수"],
//       difficulty: "hard",
//     },
//     {
//       clue: "노드가 메모리상 비연속적으로 연결되며 삽입과 삭제를 포인터 수준에서 빠르게 처리하는 선형 구조",
//       answer: "연결 리스트",
//       options: ["연결 리스트", "큐", "덱", "스택"],
//       difficulty: "easy",
//     },
//     {
//       clue: "원점 기준 방향 벡터의 기울기 순서를 기반으로 극각 기준 정렬을 수행하는 계산 기하 기법",
//       answer: "각도 정렬",
//       options: ["각도 정렬", "볼록 껍질", "회전하는 캘리퍼스", "다각형의 넓이"],
//       difficulty: "hard",
//     },
//     {
//       clue: "트리에서 가장 멀리 떨어진 두 정점 사이 거리의 최댓값을 두 번의 탐색으로 구하는 대표 성질",
//       answer: "트리의 지름",
//       options: ["트리의 지름", "트리", "최단 경로", "센트로이드"],
//       difficulty: "medium",
//     },
//       {
//         clue: "주어진 점 집합의 각 점에 대해 가장 가까운 영향 영역을 평면 위에 분할해 보여주는, 거리 기반 공간 분해의 대표적인 기하 구조",
//         answer: "보로노이 다이어그램",
//         options: ["보로노이 다이어그램", "델로네 삼각분할", "볼록 껍질", "쌍대 그래프"],
//         difficulty: "hard",
//       },
//       {
//         clue: "평면 영역의 면적분과 경계 적분을 연결하여 곡선의 둘레와 내부 면적 사이의 관계를 정교하게 다루는 미적분학적 정리",
//         answer: "그린 정리",
//         options: ["그린 정리", "픽의 정리", "오일러 지표 (χ=v-e+f)", "다각형의 넓이"],
//         difficulty: "hard",
//       },
//       {
//         clue: "여러 점의 함수값으로부터 유일한 다항식을 복원하는, 계수 복원과 값 재구성의 고전적인 대수 기법",
//         answer: "다항식 보간법",
//         options: ["다항식 보간법", "고속 푸리에 변환", "생성 함수", "라빈–카프"],
//         difficulty: "hard",
//       },
//       {
//         clue: "평면 그래프의 면과 꼭짓점을 맞바꾸어 사고함으로써 원래 문제를 다른 관점의 그래프로 치환하는 쌍대성 기반 구조",
//         answer: "쌍대 그래프",
//         options: ["쌍대 그래프", "평면 그래프", "보로노이 다이어그램", "현 그래프"],
//         difficulty: "hard",
//       },
//       {
//         clue: "주어진 점 집합을 모두 포함하는 가장 작은 원을 찾는 계산 기하의 대표 최적화 문제",
//         answer: "최소 외접원",
//         options: ["최소 외접원", "볼록 껍질", "회전하는 캘리퍼스", "반평면 교집합"],
//         difficulty: "hard",
//       },
//       {
//         clue: "각 상태의 후보를 단조하게 유지하며 구간 최적값을 빠르게 갱신하는, 덱과 단조성의 결합 최적화 테크닉",
//         answer: "단조 큐를 이용한 최적화",
//         options: ["단조 큐를 이용한 최적화", "덱을 이용한 구간 최댓값 트릭", "슬라이딩 윈도우", "세그먼트 트리 비츠"],
//         difficulty: "hard",
//       },
//       {
//         clue: "교묘하게 구간 교차와 교환을 반복하여 계산량을 낮추는, 직관보다 발상 전환이 중요한 고난도 기법",
//         answer: "bulldozer 트릭",
//         options: ["bulldozer 트릭", "스위핑", "mo's", "cdq 분할 정복"],
//         difficulty: "hard",
//       },
//       {
//         clue: "일반적인 그래프에서 서로 겹치지 않는 간선 집합의 최대 크기를 찾는, 매칭 이론의 가장 기본 형태",
//         answer: "일반적인 매칭",
//         options: ["일반적인 매칭", "이분 매칭", "최대 유량", "서큘레이션"],
//         difficulty: "hard",
//       },
//       {
//         clue: "선형 점화식의 계수와 초기값을 다항식 항등식으로 바꾸어 빠르게 n번째 항을 복원하는 대수적 계산 기법",
//         answer: "다항식을 이용한 선형점화식 계산",
//         options: ["다항식을 이용한 선형점화식 계산", "생성 함수", "다항식 보간법", "분할 정복을 이용한 거듭제곱"],
//         difficulty: "hard",
//       },
//       {
//         clue: "소수 모듈러에서 밑과 거듭제곱의 역문제를 풀기 위해 순환군의 지수를 추적하는 이산 대수 문제",
//         answer: "이산 로그",
//         options: ["이산 로그", "모듈로 곱셈 역원", "오일러 피 함수", "페르마의 소정리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "질의를 절반 공간이나 시간 축 기준으로 나누어 재귀적으로 처리하는, 오프라인 분배형 분할 정복 기법",
//         answer: "cdq 분할 정복",
//         options: ["cdq 분할 정복", "분할 정복", "병렬 이분 탐색", "mo's"],
//         difficulty: "hard",
//       },
//       {
//         clue: "독립 집합의 최대화처럼 선형 종속성 제약이 있는 선택 문제를 다루는 추상적 조합 구조",
//         answer: "매트로이드",
//         options: ["매트로이드", "조합론", "분리 집합", "이분 그래프"],
//         difficulty: "hard",
//       },
//       {
//         clue: "평면, 선, 3차원을 넘어서는 차원에서의 거리와 볼록성, 초평면 관계를 연구하는 확장 기하 태그",
//         answer: "4차원 이상의 기하학",
//         options: ["4차원 이상의 기하학", "기하학", "선형대수학", "반평면 교집합"],
//         difficulty: "hard",
//       },
//       {
//         clue: "문자열의 모든 접미사를 압축된 형태의 트리로 표현하여 반복 패턴과 부분 문자열을 다루는 고급 자료구조",
//         answer: "접미사 트리",
//         options: ["접미사 트리", "트라이", "접미사 배열과 lcp 배열", "회문 트리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "격자점의 내부 개수를 면적과 경계점 수로 연결하는 정수 기하의 매우 유명한 공식",
//         answer: "픽의 정리",
//         options: ["픽의 정리", "그린 정리", "오일러 지표 (χ=v-e+f)", "다각형의 넓이"],
//         difficulty: "medium",
//       },
//       {
//         clue: "대칭군의 작용 아래에서 서로 다른 배치를 셀 때 궤도 수를 구하는 조합론의 핵심 보조정리",
//         answer: "번사이드 보조정리",
//         options: ["번사이드 보조정리", "포함 배제의 원리", "비둘기집 원리", "조합론"],
//         difficulty: "hard",
//       },
//       {
//         clue: "방향 그래프에서 시작 정점으로부터의 지배 관계를 계층적으로 압축해 표현하는 흐름 분석용 트리 구조",
//         answer: "도미네이터 트리",
//         options: ["도미네이터 트리", "트리", "강한 연결 요소", "오일러 경로 테크닉"],
//         difficulty: "hard",
//       },
//       {
//         clue: "입력 형식이 복잡하거나 문자 단위로 꼬여 있어 바이트 수준 해석이 중요한 저수준 처리 상황",
//         answer: "차분 공격",
//         options: ["차분 공격", "utf-8 입력 처리", "파싱", "구현"],
//         difficulty: "medium",
//       },
//       {
//         clue: "바이트 열을 유니코드 문자로 안전하게 해석해야 하는 입출력 관련 세부 처리 태그",
//         answer: "utf-8 입력 처리",
//         options: ["utf-8 입력 처리", "파싱", "문자열", "정규 표현식"],
//         difficulty: "medium",
//       },
//       {
//         clue: "수열의 각 항이 이전 항들의 약수나 배수 구조를 따라 전개되는, 정수론적 계열 분석 태그",
//         answer: "차수열",
//         options: ["차수열", "정수론", "조화수", "수학"],
//         difficulty: "medium",
//       },
//       {
//         clue: "큰 문제를 서로 독립적인 하위 구조로 나누어 트리의 균형을 맞춰가며 다루는 분할형 설계",
//         answer: "트리 분할",
//         options: ["트리 분할", "센트로이드 분할", "heavy-light 분할", "트리 압축"],
//         difficulty: "hard",
//       },
//       {
//         clue: "루트에서 리프까지 이어지는 주된 경로를 압축해 경로 질의를 빠르게 만들려는 트리 최적화 변형",
//         answer: "탑 트리",
//         options: ["탑 트리", "heavy-light 분할", "트리 분할", "도미네이터 트리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "문자열의 앞뒤를 동시에 확장하며 교차 여부를 따져 해를 좁혀 가는 양방향 검색 방식",
//         answer: "양방향 탐색",
//         options: ["양방향 탐색", "이분 탐색", "두 포인터", "탑 트리"],
//         difficulty: "medium",
//       },
//       {
//         clue: "모듈러 거듭제곱 수열이 일정 주기로 반복되는 성질을 이용해 계산을 줄이는 수론적 순환 패턴",
//         answer: "피사노 주기",
//         options: ["피사노 주기", "오일러 피 함수", "페르마의 소정리", "중국인의 나머지 정리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "문자열의 회문 구조를 중심으로 모든 팰린드롬 구간을 한 번에 관리하는 중심 확장형 트리",
//         answer: "회문 트리",
//         options: ["회문 트리", "접미사 트리", "트라이", "문자열"],
//         difficulty: "hard",
//       },
//       {
//         clue: "실수값의 k제곱근을 정수론 또는 계산 기하 맥락에서 다루며 반복 근사로 해를 찾는 수치적 문제",
//         answer: "이산 제곱근",
//         options: ["이산 제곱근", "이산 로그", "경사 하강법", "수치해석"],
//         difficulty: "hard",
//       },
//       {
//         clue: "선의 모양을 따라 원소를 유연하게 묶고 풀 수 있는 고전적인 연결 자료구조",
//         answer: "로프",
//         options: ["로프", "스플레이 트리", "연결 리스트", "덱"],
//         difficulty: "medium",
//       },
//       {
//         clue: "정교한 pointer dance로 행과 열을 제거해 정확한 커버를 찾는 조합 최적화용 행렬 기반 기법",
//         answer: "춤추는 링크",
//         options: ["춤추는 링크", "분리 집합", "스플레이 트리", "매트로이드"],
//         difficulty: "hard",
//       },
//       {
//         clue: "특정 상수 x에 대해 반복적으로 접어서 최적 해를 압축하는, 다루기 매우 까다로운 상수 축소 기법",
//         answer: "크누스 x",
//         options: ["크누스 x", "크누스 최적화", "크누스", "분할 정복을 사용한 최적화"],
//         difficulty: "hard",
//       },
//       {
//         clue: "오차 함수의 기울기를 따라 파라미터를 조금씩 수정해 최솟값을 향해 내려가는 연속 최적화 기법",
//         answer: "경사 하강법",
//         options: ["경사 하강법", "삼분 탐색", "수치해석", "선형 계획법"],
//         difficulty: "medium",
//       },
//       {
//         clue: "두 문자열의 공통 부분 구조를 재귀적으로 세어가며 길이 정보를 복원하는 고전적인 문자열 DP 보조정리",
//         answer: "린드스트롬–게셀–비엔노 보조정리",
//         options: ["린드스트롬–게셀–비엔노 보조정리", "히르쉬버그", "최장 공통 부분 수열 문제", "매내처"],
//         difficulty: "hard",
//       },
//       {
//         clue: "순차적으로 진행되는 상태 전이를 원형 구조나 자물쇠 조합처럼 해석하는 회전형 문제 태그",
//         answer: "다이얼",
//         options: ["다이얼", "큐", "스택", "덱"],
//         difficulty: "medium",
//       },
//       {
//         clue: "한쪽에서 하나씩 제안을 하고 다른 쪽이 선호도에 따라 재배치하는 안정적 매칭 문제",
//         answer: "안정 결혼 문제",
//         options: ["안정 결혼 문제", "일반적인 매칭", "이분 매칭", "헝가리안"],
//         difficulty: "hard",
//       },
//       {
//         clue: "유리수로 이루어진 등차수열의 아래쪽 합을 정수론적 바닥 함수 관점에서 다루는 특수 합 계산",
//         answer: "유리 등차수열의 내림 합",
//         options: ["유리 등차수열의 내림 합", "조화수", "정수론", "뫼비우스 반전 공식"],
//         difficulty: "hard",
//       },
//       {
//         clue: "점 집합을 삼각형 단위로 분할하며 가까운 이웃 구조를 유도하는 계산 기하의 삼각망",
//         answer: "델로네 삼각분할",
//         options: ["델로네 삼각분할", "보로노이 다이어그램", "볼록 껍질", "반평면 교집합"],
//         difficulty: "hard",
//       },
//       {
//         clue: "불확실한 사건의 관측값을 바탕으로 원인과 가설의 확률을 뒤집어 추정하는 통계적 추론 정리",
//         answer: "베이즈 정리",
//         options: ["베이즈 정리", "확률론", "통계학", "기댓값의 선형성"],
//         difficulty: "medium",
//       },
//       {
//         clue: "이벤트가 시간에 따라 변할 때 각 시점의 값과 구간 최적을 동시에 관리하는 동적 세그먼트 구조",
//         answer: "키네틱 세그먼트 트리",
//         options: ["키네틱 세그먼트 트리", "세그먼트 트리", "퍼시스턴트 세그먼트 트리", "느리게 갱신되는 세그먼트 트리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "선형 점화식에서 반복 구조를 빠르게 압축하기 위해 DP의 차수를 줄이는 대표적인 고급 최적화",
//         answer: "크누스 최적화",
//         options: ["크누스 최적화", "분할 정복을 사용한 최적화", "크누스 x", "단조 큐를 이용한 최적화"],
//         difficulty: "hard",
//       },
//       {
//         clue: "독립적으로 뽑은 표본들 중 적어도 두 개가 같은 값을 가질 가능성이 급격히 커지는 유명한 확률 현상",
//         answer: "생일 문제",
//         options: ["생일 문제", "확률론", "통계학", "비둘기집 원리"],
//         difficulty: "medium",
//       },
//       {
//         clue: "비트셋 연산을 이용해 두 문자열의 공통 부분 수열 DP를 빠르게 압축 계산하는 고성능 최적화 기법",
//         answer: "비트 집합을 이용한 최장 공통 부분 수열 최적화",
//         options: ["비트 집합을 이용한 최장 공통 부분 수열 최적화", "최장 공통 부분 수열 문제", "비트마스킹", "다이나믹 프로그래밍"],
//         difficulty: "hard",
//       },
//       {
//         clue: "문자열 DP에서 계산해야 할 거대한 표를 절반씩 쪼개 경로를 복원하는 메모리 절약 기법",
//         answer: "히르쉬버그",
//         options: ["히르쉬버그", "린드스트롬–게셀–비엔노 보조정리", "최장 공통 부분 수열 문제", "매내처"],
//         difficulty: "hard",
//       },
//       {
//         clue: "여러 입력값이 한꺼번에 주어질 때 이를 특정 규칙에 따라 일괄적으로 합산하거나 변환하는 계산 태그",
//         answer: "다중 대입값 계산",
//         options: ["다중 대입값 계산", "구현", "파싱", "수학"],
//         difficulty: "medium",
//       },
//       {
//         clue: "간선 방향의 제약을 반영하면서도 전체 가중 합이 최소가 되도록 트리를 선택하는 방향성 있는 MST 변형",
//         answer: "현 그래프",
//         options: ["현 그래프", "유향 최소 스패닝 트리", "최소 스패닝 트리", "방향 비순환 그래프"],
//         difficulty: "hard",
//       },
//       {
//         clue: "방향성을 가진 그래프에서 모든 정점을 연결하는 최소 비용 구조를 찾는 일반 MST의 방향판 버전",
//         answer: "유향 최소 스패닝 트리",
//         options: ["유향 최소 스패닝 트리", "최소 스패닝 트리", "현 그래프", "최단 경로"],
//         difficulty: "hard",
//       },
//       {
//         clue: "두 개의 인접한 행렬 또는 그래프 조각 사이에서 경계 조건과 면적 비교를 다루는 위상적 정리의 이름",
//         answer: "스토어–바그너",
//         options: ["스토어–바그너", "그린 정리", "쌍대성", "오일러 지표 (χ=v-e+f)"],
//         difficulty: "hard",
//       },
//       {
//         clue: "정수론에서 거듭제곱을 반복적으로 승강시키며 합동 구조를 재귀적으로 축소하는 특수 보조정리",
//         answer: "지수승강 보조정리",
//         options: ["지수승강 보조정리", "페르마의 소정리", "오일러 피 함수", "중국인의 나머지 정리"],
//         difficulty: "hard",
//       },
//       {
//         clue: "교대로 턴을 주고받는 분할 게임에서 그룬디 수를 기반으로 승패를 판정하는 게임 이론적 틀",
//         answer: "하켄부시 게임",
//         options: ["하켄부시 게임", "게임 이론", "스프라그–그런디 정리", "확률론"],
//         difficulty: "hard",
//       },
//       {
//         clue: "다수 후보 중 과반을 차지하는 원소를 한 번의 스캔과 잔여 카운트로 찾아내는 투표 기반 알고리즘",
//         answer: "보이어–무어 다수결 투표",
//         options: ["보이어–무어 다수결 투표", "해시를 사용한 집합과 맵", "정렬", "스택"],
//         difficulty: "medium",
//       },
//       {
//         clue: "색상 규칙과 회전 균형 조건을 유지하여 로그 높이를 보장하는 자기 균형 이진 탐색 트리",
//         answer: "레드-블랙 트리",
//         options: ["레드-블랙 트리", "스플레이 트리", "트리", "세그먼트 트리"],
//         difficulty: "medium",
//       },
//     ]