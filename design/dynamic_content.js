

const text2img=`<div id="text2img" href="https://roardefi.com/machine-learning-model/text2img"><p class="ai-modal-name">API usage</p>
                      <div class="description"> 
                      </div>

                     
                      <!--
                      <section id="cURL" class="code api-key-auto-substitute-area">
                        <div class="inner-content">
                          <span class="quick-start-header"><code><p id="code1">cURL Example</p></code></span>
                          <div class="highlight"><pre><span></span><span class="c1"># Example using POST request with JSON payload:</span>
                      
curl<span class="w"> </span>-X<span class="w"> </span>POST<span class="w"> </span><span class="s1">"https://api.example.com/generate"</span><span class="w"> </span><span class="se">\</span>
<span class="w">    </span>-H<span class="w"> </span><span class="s1">"Content-Type: application/json"</span><span class="w"> </span><span class="se">\</span>
<span class="w">    </span>-H<span class="w"> </span><span class="s1">"Authorization: Bearer YOUR_API_KEY"</span><span class="w"> </span><span class="se">\</span>
<span class="w">    </span>-d<span class="w"> </span><span class="s1">'{</span>
<span class="w">      </span><span class="s2">"image_size"</span><span class="w">: </span><span class="s1">"1024x1024"</span>,<span class="w"></span>
<span class="w">      </span><span class="s2">"text"</span><span class="w">: </span><span class="s1">"Analyze bid-ask volumes in real-time"</span><span class="w"></span>
<span class="s1">}'</span><span class="w"> </span>
                            </pre>
                          </div>
                        </div>
                      </section>
                      -->
                      
                        

                      <!--
                      <section id="Javascript" class="code api-key-auto-substitute-area">
                        <div class="inner-content">
                          <span class="quick-start-header"><code><p id="code2">Javascript Example</p></code></span>
                          <div class="highlight">
                            <pre><span></span>//<span class="w"> </span>Example<span class="w"> </span>using<span class="w"> </span>Axios<span class="w"> </span>to<span class="w"> </span>make<span class="w"> </span>a<span class="w"> </span>POST<span class="w"> </span>request:
<span class="k">const</span><span class="w"> </span><span class="nv">axios</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>require<span class="o">(</span><span class="s1">'axios'</span><span class="o">)</span><span class="p">;</span>
                      
<span class="k">const</span><span class="w"> </span><span class="nv">data</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="o">{</span>
<span class="w">  </span><span class="s2">"image_size"</span>:<span class="w"> </span><span class="s2">"1024x1024"</span>,
<span class="w">  </span><span class="s2">"text"</span>:<span class="w"> </span><span class="s2">"Analyze bid-ask volumes in real-time"</span>
<span class="o">}</span><span class="p">;</span>
                      
<span class="nv">axios</span><span class="p">.</span>post<span class="o">(</span><span class="s1">"https://api.example.com/generate"</span>,<span class="w"> </span><span class="nv">data</span>,<span class="w"> </span><span class="o">{</span>
<span class="w">  </span>headers<span class="w">:</span><span class="w"> </span><span class="o">{</span>
<span class="w">    </span><span class="s2">"Content-Type"</span>:<span class="w"> </span><span class="s2">"application/json"</span>,
<span class="w">    </span><span class="s2">"Authorization"</span>:<span class="w"> </span><span class="s2">"Bearer YOUR_API_KEY"</span>
<span class="w">  </span><span class="o">}</span>
<span class="o">})</span>
<span class="p">.</span>then<span class="o">(</span><span class="nv">response</span><span class="w"> </span><span class="o">=&gt;</span><span class="w"> </span>console.log<span class="o">(</span><span class="nv">response</span><span class="p">.</span><span class="nv">data</span><span class="o">))</span>
<span class="p">.</span>catch<span class="o">(</span><span class="nv">error</span><span class="w"> </span><span class="o">=&gt;</span><span class="w"> </span>console.error<span class="o">(</span><span class="nv">error</span><span class="o">))</span><span class="p">;</span>
                            </pre>
                          </div>
                        </div>
                      </section>
                      -->
                      

                      
                      <section id="Python" class="code api-key-auto-substitute-area">
    <div class="inner-content">
        <span class="quick-start-header"><code><p id="code3"> Python Example</p></code></span>
        <div class="highlight"><pre><span></span><span class="c1"># Example using Python to interact with the API:</span>

<span class="nv">import</span><span class="w"> </span>requests
<span class="nv">import</span><span class="w"> </span>base64
<span class="nv">import</span><span class="w"> </span>os


url<span class="w"> </span><span class="o">=</span><span class="w"> </span><span>"https://api.roardefi.com/getchart"</span>

data<span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="o">{</span>
<span class="w">    </span><span class="s1">"currency"</span><span class="o">:</span><span class="w"> </span><span class="s1">"BTC"</span><span class="o">,</span>
<span class="w">    </span><span class="s1">"currency_reference"</span><span class="o">:</span><span class="w"> </span><span class="s1">"USDT"</span><span class="o">,</span>
<span class="w">    </span><span class="s1">"interval"</span><span class="o">:</span><span class="w"> </span><span class="s1">"1m"</span>
<span class="o">}</span>

<span class="nv">try</span><span class="w">:</span>
    <span>response</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>requests.post<span class="o">(</span><span>url</span><span class="o">,</span> <span class="nv">json</span><span class="o">=</span><span>data</span><span class="o">,</span> <span class="nv">timeout</span><span class="o">=</span><span class="m">50</span><span class="w">)</span>
    
    <span class="k">if</span> <span>response</span><span class="w">.</span><span>status_code</span><span class="o"> </span><span class="o">==</span><span class="w"> </span><span class="m">200</span><span class="w">:</span>
        <span>image_base64</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>response.json<span class="o">().get</span><span class="o">(</span><span class="s1">"base64img"</span><span class="o">)</span>
        <span>image_data</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>base64.b64decode<span class="o">(</span><span>image_base64</span><span class="o">)</span>
        <span>output_path</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>os.path.join<span class="o">(</span>os.getcwd<span class="o">(),</span> <span class="s1">"base64image.png"</span><span class="o">)</span>
        <span class="k">with</span> <span class="k">open</span><span class="o">(</span><span>output_path</span><span class="o">,</span> <span class="s1">"wb"</span><span class="o">)</span> <span class="k">as</span> <span>file</span><span class="w">:</span>
            <span>file</span><span class="w">.</span><span>write</span><span class="o">(</span><span>image_data</span><span class="o">)</span>
        print<span class="o">(</span><span class="s1">"Image saved"</span><span class="o">)</span>
    <span class="k">else</span><span class="w">:</span>
        print<span class="o">(</span><span class="s1">"Error in request"</span><span class="o">)</span>
<span class="k">except</span> <span class="nv">Exception</span> <span class="k">as</span> <span class="nv">e</span><span class="w">:</span>
    print<span class="o">(</span><span class="s1">"Error"</span><span class="o">)</span>
</pre></div>
    </div>
</section>

                    

                      
                    <!--<section id="Ruby" class="code api-key-auto-substitute-area">
                      <div class="inner-content">
                          <span class="quick-start-header"><code><p id="code4"> Ruby Example</p></code></span>
                          <div class="highlight"><pre><span></span><span class="c1"># Example using Ruby to interact with the API:</span>
                  
require<span class="w"> </span><span class="s1">'net/http'</span>
require<span class="w"> </span><span class="s1">'json'</span>
                  
<span class="nv">url</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>URI<span class="o">(</span><span class="s2">"https://api.example.com/generate"</span><span class="o">)</span>
<span class="nv">http</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>Net::HTTP.new<span class="o">(</span><span class="nv">url</span>.host, <span class="nv">url</span>.port<span class="o">)</span>
<span class="nv">http</span>.use_ssl<span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="kc">true</span>
                  
<span class="nv">request</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>Net::HTTP::Post.new<span class="o">(</span><span class="nv">url</span><span class="o">)</span>
<span class="nv">request</span><span class="o">[</span><span class="s1">"Content-Type"</span><span class="o">]</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="s1">"application/json"</span>
<span class="nv">request</span><span class="o">[</span><span class="s1">"Authorization"</span><span class="o">]</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="s1">"Bearer YOUR_API_KEY"</span>
<span class="nv">request</span>.body<span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="o">{</span>
<span class="w">  </span><span class="s1">image_size:</span><span class="w"> </span><span class="s1">"1024x1024"</span>,<span class="w"> </span>
<span class="w">  </span><span class="s1">text:</span><span class="w"> </span><span class="s1">"Analyze bid-ask volumes in real-time"</span>
<span class="o">}</span>.to_json
                  
<span class="nv">response</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nv">http</span>.request<span class="o">(</span><span class="nv">request</span><span class="o">)</span>
puts<span class="w"> </span><span class="nv">response</span>.body
                  </pre></div>
                      </div>
                  </section>-->

                  <div class="divider-across-docs-1"></div>
                  
                  
                      
                    </div>`;


const principalContainer = document.getElementById('documentation-side');
  if (principalContainer) {
        principalContainer.insertAdjacentHTML('beforeend', text2img);
  }


  //document.getElementById('documentation-side').textContent="";
