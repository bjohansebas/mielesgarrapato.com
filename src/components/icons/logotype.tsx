import { cn } from '@/lib/utils'

export default function LogoType({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038 185.2" className={cn('h-10 w-10', className)}>
      <path
        fill="#131C17"
        d="m96.101 65.575-.953-1.984c-.079-.162-.027-.231.152-.2 2.321.392 4.563.788 6.726 1.183 3.524.65 7.001.437 10.426-.633 4.226-1.324 7.826-4.501 8.943-8.882 1.056-4.136-.983-8.813-4.542-11.196-.1-.065-.113-.202-.031-.292 3.243-3.473 4.357-7.998 2.607-12.472-1.276-3.263-3.632-5.481-7.06-6.66-4.869-1.675-10.192.261-13.661 3.858-1.888 1.953-3.773 4.133-5.657 6.537-.65.828-2.194 2.602-4.639 5.322-.034.038-.065.035-.092-.01-.162-.278-.434-.739-.815-1.389-.028-.048-.017-.086.027-.117 2.263-1.454 4.223-3.184 5.877-5.192 2.809-3.408 3.424-7.596 1.045-11.361-.846-1.338-2.177-2.559-3.989-3.662-.736-.451-1.444-.499-2.262-.348-1.228.227-1.905.939-2.029 2.139-.189 1.805.97 2.645 2.38 3.353 1.361.684 2.269 2.032 2.32 3.548.124 3.649-4.26 6.348-6.97 7.892-.096.055-.213.065-.316.024-2.235-.856-4.432-.732-6.588.365-.121.061-.238.061-.358.003-1.585-.801-3.064-1.719-4.432-2.758-2.383-1.812-3.765-4.69-2.105-7.389 1.176-1.909 4.041-1.768 4.357-4.354.165-1.354-.581-2.462-1.902-2.795-.89-.227-1.791-.038-2.709.567-2.727 1.802-4.704 4.254-5.344 7.527-1.007 5.148 3.325 9.8 7.407 12.249.251.151.502.309.757.471.14.089.196.265.134.419l-.592 1.458c-.072.182-.182.207-.33.076-2.565-2.27-5.003-4.69-7.623-6.881-4.223-3.535-8.628-5.873-14.246-3.569-1.981.812-3.59 2.287-4.832 4.429-1.409 2.438-1.444 5.969-.247 8.49.289.608.622 1.2.997 1.778.096.147.076.275-.065.388-2.603 2.087-4.013 4.642-4.23 7.668-.203 2.875.712 5.326 2.655 7.544 3.724 4.244 9.999 5.447 15.374 4.611 2.08-.323 4.178-.698 6.299-1.124.152-.031.282.103.244.251-.113.471-.343.88-.684 1.235"
      />
      <path
        fill="#FDFFFE"
        d="M114.002 32.609c-.55 1.468-1.385 2.572-2.506 3.304-.843.554-1.665 1.073-2.466 1.565-1.001.615-2.572 1.416-4.714 2.407-1.716.794-3.332 1.609-4.852 2.451-2.201 1.218-4.443 2.476-6.729 3.439-1.015.427-1.943 1.09-2.782 1.991-.079.086-.175.11-.289.072-.21-.072-.402-.185-.578-.34 1.936-2.386 4.288-4.91 6.032-6.946 2.015-2.352 3.858-4.47 5.532-6.351 2.487-2.796 6.348-5.608 10.271-4.168 1.379.506 2.407 1.366 3.081 2.576Z"
      />
      <path
        fill="#EFE9D1"
        d="M114.002 32.609c.657 1.207.884 2.379.681 3.525-.601 3.352-2.988 5.164-5.99 6.364-5.904 2.362-12.516 5.196-19.05 7.74-.099.038-.213.028-.302-.03l-1.644-1.077c-.096-.062-.107-.199-.024-.278l1.413-1.355c.176.155.368.268.578.34.114.038.21.014.289-.072.839-.901 1.767-1.564 2.782-1.991 2.286-.963 4.528-2.221 6.729-3.439 1.52-.842 3.136-1.657 4.852-2.451 2.142-.991 3.713-1.792 4.714-2.407.801-.492 1.623-1.011 2.466-1.565 1.121-.732 1.956-1.836 2.506-3.304Z"
      />
      <path
        fill="#FDFFFE"
        d="M68.744 45.005c-.52.464-1.166.254-1.947-.629-.457-.519-.921-.901-1.533-1.101-2.514-.815-5.055-1.623-7.62-2.417-1.138-.354-2.215-.643-3.222-.87-1.083-.244-2.156-.578-3.215-.994-.231-.089-.485-.158-.764-.202-.271-.042-.529-.107-.773-.193.791-3.078 3.834-4.082 6.674-3.356 1.461.374 2.978 1.241 4.553 2.603 2.596 2.249 5.213 4.635 7.847 7.159Z"
      />
      <path
        fill="#EFE9D1"
        d="M49.67 38.599c.244.086.502.151.773.193.279.044.533.113.764.202 1.059.416 2.132.75 3.215.994 1.007.227 2.084.516 3.222.87 2.565.794 5.106 1.602 7.62 2.417.612.2 1.076.582 1.533 1.101.781.883 1.427 1.093 1.947.629l3.882 3.463c.072.065.062.178-.017.23-.069.045-.162.045-.282 0-3.773-1.448-7.686-2.775-11.74-3.982-2.661-.794-5.054-1.327-7.183-1.592-.853-.106-1.372-.086-2.111-.667-1.235-.977-1.774-2.263-1.623-3.858Z"
      />
      <path
        fill="#F9AD1B"
        d="M76.776 42.148c-.031.295-.014.577.055.845.024.1.09.159.189.179l1.2.23c.148.031.303-.03.392-.151.286-.381.716-.364.998-.784.251-.371.357-.767.323-1.189-.031-.361-.22-.63-.568-.812-.285-.148-.632-.247-1.048-.299 1.409-.853 3.294-.726 4.638.313 1.218.938 1.751 2.431 1.355 3.806-.11.385-.289.747-.529 1.073-1.372 1.847-4.278 1.988-6.011.292-.97-.949-1.348-2.279-.994-3.503Z"
      />
      <path
        fill="#FCBF35"
        d="M78.317 40.167c.416.052.763.151 1.048.299.348.182.537.451.568.812.034.422-.072.818-.323 1.189-.282.42-.712.403-.998.784-.089.121-.244.182-.392.151l-1.2-.23c-.099-.02-.165-.079-.189-.179-.069-.268-.086-.55-.055-.845.238-.819.784-1.52 1.541-1.981Z"
      />
      <path
        fill="#FDFFFE"
        d="M115.801 50.503c-.468 1.338-1.321 2.167-2.559 2.486-4.456 1.142-8.094 1.19-13.248 1.163-1.056-.007-2.064.072-3.102.103-.323.01-.753.113-1.286.302-.595.217-1.18.241-1.757.073 3.772-1.771 7.52-3.466 11.237-5.079 1.836-.794 3.208-1.341 4.12-1.641 2.517-.821 5.292.176 6.595 2.593Zm-45.799 4.536c-1.083-.32-2.197-.495-3.349-.53-2.256-.072-4.48-.113-6.726-.354-2.613-.282-5.007-.461-7.183-.536-1.19-.045-2.751.041-4.687.258-.11.01-.217.051-.309.113-.186.127-.361.203-.523.227-.402-2.734 2.09-4.814 4.58-5.144 3.054-.41 6.341.468 9.329 1.396 3.291 1.018 6.33 2.125 9.126 3.318.11.048.162.131.155.251-.024.351-.162.684-.413 1.001Z"
      />
      <path
        fill="#EFE9D1"
        d="M115.801 50.503c.516 1.51.443 2.947-.22 4.305-1.272 2.614-4.347 3.886-7.139 4.075-4.143.275-8.472-.306-12.981-1.747-.969-.309-1.922-.756-2.86-1.337-.179-.11-.19-.365-.025-.492.423-.323.847-.55 1.273-.677.577.168 1.162.144 1.757-.073.533-.189.963-.292 1.286-.302 1.038-.031 2.046-.11 3.102-.103 5.154.027 8.792-.021 13.248-1.163 1.238-.319 2.091-1.148 2.559-2.486Z"
      />
      <path
        fill="#131C17"
        d="M77.293 167.076q-.435-2.81-.525-3.973-18.912 1.037-21.09-13.749-15.474-1.839-12.264-15.135c-11.92-7.393-5.903-17.365-1.834-19.027-5.158-2.407.802-18.339 5.845-15.473-4.24-11.577 5.502-15.818 9.342-14.671.625-6.334 4.596-15.69 8.768-18.913q-2.407-1.719 30.604-.687 8.081 11.949 9.055 19.256 12.78 4.384 8.826 14.785 11.347 5.502 6.304 15.818c3.324.917 11.061 14.442-1.834 18.798 3.266 10.43-5.158 14.213-12.723 14.9-.458 3.095-1.719 13.067-20.517 14.328q-.596 1.721-.915 3.743h-7.042Z"
      />
      <path
        fill="#EFE9D1"
        d="m70.002 55.039-1.19 2.995c-.041.106-.117.168-.23.185-3.772.63-7.132 1.07-10.082 1.321-2.259.189-4.412.017-6.451-.519-2.025-.53-4.594-2.49-4.824-4.804.162-.024.337-.1.523-.227.092-.062.199-.103.309-.113 1.936-.217 3.497-.303 4.687-.258 2.176.075 4.57.254 7.183.536 2.246.241 4.47.282 6.726.354 1.152.035 2.266.21 3.349.53Z"
      />
      <path
        fill="#E78C0B"
        d="M75.855 55.565c-.478 1.85-.441 3.652.11 5.405.595 1.909 1.444 4.103 2.778 5.495 2.214 2.318 5.433.028 6.578-2.135 1.162-2.201 1.919-4.711 2.266-7.531.822 2.431.884 4.794.186 7.087-.368 1.204-.901 2.328-1.599 3.374-1.706 2.544-4.904 3.789-7.654 2.145-2.542-1.52-4.003-5.079-4.337-7.912-.25-2.149.307-4.123 1.672-5.928Z"
      />
      <path
        fill="#EFE9D1"
        d="M82.288 55.737c-.56.784-1.217 1.258-1.977 1.42-2.813.602-2.569-4.79 1.479-3.507.464.147.729.505.79 1.072.038.351-.058.688-.292 1.015Z"
      />
      <path
        fill="#F9AD1B"
        d="M87.587 56.799c-.347 2.82-1.104 5.33-2.266 7.531-1.145 2.163-4.364 4.453-6.578 2.135-1.334-1.392-2.183-3.586-2.778-5.495-.551-1.753-.588-3.555-.11-5.405 1.382-2.19 3.414-3.263 6.1-3.219 1.784.031 3.208.681 4.277 1.95.63.746 1.08 1.582 1.355 2.503Zm-5.007-2.077c-.061-.567-.326-.925-.79-1.072-4.048-1.283-4.292 4.109-1.479 3.507.76-.162 1.417-.636 1.977-1.42.234-.327.33-.664.292-1.015Zm60.733 60.945c-1.065 4.59-4.401 5.11-6.162 11.8-1.761 6.69-4.993 39.607-5.282 39.607q-47.538.09-47.534 0v-3.521q.003-.109 0-1.76 5.997.822 8.803 0c6.107-1.792 11.477-6.221 12.388-12.741.038-.258.254-.447.512-.454 2.989-.075 5.75-.907 8.277-2.493 2.18-1.365 3.593-3.483 4.298-5.828.588-1.963.526-3.934-.189-5.914-.031-.086.01-.182.093-.224 4.37-2.121 7.121-6.609 6.478-11.533-.364-2.768-2.218-5.615-4.463-7.189-.207-.145-.279-.42-.169-.651 1.297-2.664 1.575-5.181.836-7.551-1.076-3.455-3.628-5.914-6.888-7.375-.182-.083-.268-.289-.202-.475 2.417-6.839-1.898-12.942-8.676-14.325-.206-.041-.368-.203-.406-.409-.969-5.141-3.727-8.92-8.273-11.333-.275-.148-.419-.461-.347-.767.169-.726.289-1.427.361-2.098.093-.887-.127-2.506-.667-4.858 2.335.271 4.725.849 7.173 1.74 4.804 1.743 9.174 3.699 13.118 5.869 2.623 1.444 5.171 3.284 7.616 5.051 7.033 5.296 22.92 21.845 19.305 37.432Zm-27.214-35.89c.272-1.098-.422-2.212-1.551-2.495-1.13-.281-2.265.379-2.54 1.475-.272 1.098.423 2.212 1.551 2.495 1.131.281 2.265-.379 2.54-1.475Zm9.453 7.364c0-1.142-.925-2.066-2.066-2.066-1.142 0-2.067.924-2.067 2.066s.925 2.067 2.067 2.067c1.141 0 2.066-.925 2.066-2.067Zm-2.99 8.175c-.486-.93-1.662-1.28-2.626-.777-.965.504-1.354 1.666-.87 2.597.486.93 1.662 1.28 2.626.777.965-.504 1.353-1.666.87-2.597Zm-1.115 55.533c.216-1.061-.516-2.103-1.632-2.332-1.116-.228-2.196.449-2.412 1.51-.217 1.061.515 2.103 1.631 2.332 1.116.228 2.196-.449 2.413-1.51Zm-4.055 6.986c.124-1.06-.667-2.023-1.769-2.15-1.102-.13-2.096.623-2.219 1.681-.124 1.06.667 2.023 1.769 2.151 1.102.129 2.096-.624 2.219-1.682Zm7.88.12c.046-1.039-.807-1.919-1.904-1.965-1.096-.047-2.021.754-2.067 1.792-.047 1.039.806 1.92 1.903 1.966 1.096.046 2.021-.755 2.068-1.793ZM65.598 65.692c-.495 2.421-.557 4.842-.182 7.259.017.111-.021.194-.117.252-4.457 2.559-7.46 6.468-8.19 11.555-.024.148-.138.262-.282.282-4.75.723-8.304 3.369-9.578 7.873-.307 1.092-.383 2.411-.224 3.954.107 1.036.403 1.908.678 2.866.038.134-.01.22-.141.261-1.198.383-2.29.978-3.275 1.791-2.787 2.304-4.095 5.28-3.919 8.927.072 1.536.619 3.003 1.188 4.402.034.082.01.178-.062.237-2.931 2.349-4.581 4.949-4.636 8.855-.055 3.86 2.827 8.352 6.523 9.802.145.055.224.217.172.365-1.071 3.234-.685 6.209 1.164 8.933 2.58 3.799 6.685 5.263 11.176 5.283.31.004.568.228.613.534.971 6.847 5.56 11.136 12.062 12.823q2.7.703 8.817 0v5.29l-47.556-.159c-.189 0-3.436-32.992-5.286-39.61-1.849-6.619-5.271-7.165-6.16-11.796-3.092-16.12 13.368-33.022 19.31-37.44 3.362-2.907 3.741-2.911 7.602-5.054 5.379-2.989 7.066-4.126 12.99-5.868 1.016-.3 5.581-1.462 7.313-1.617Zm-27.099 21.17c.043-1.037-.801-1.911-1.883-1.958-1.084-.046-1.997.756-2.04 1.793-.043 1.036.801 1.911 1.883 1.958 1.084.046 1.997-.756 2.04-1.793Zm6.724 1.64c.751-.727.744-1.957-.018-2.746-.763-.788-1.989-.84-2.743-.114-.751.728-.744 1.957.018 2.746.763.788 1.989.84 2.743.114Zm-3.247 7.411c0-1.095-.889-1.984-1.984-1.984s-1.984.889-1.984 1.984.889 1.984 1.984 1.984 1.984-.889 1.984-1.984Zm-.258 53.21c0-1.067-.868-1.935-1.936-1.935s-1.936.868-1.936 1.935c0 1.068.868 1.936 1.936 1.936s1.936-.868 1.936-1.936Zm5.985 4.078c0-1.057-.854-1.911-1.911-1.911s-1.912.854-1.912 1.911.855 1.912 1.912 1.912 1.911-.855 1.911-1.912Zm-6.819 5.71c0-1.054-.854-1.908-1.908-1.908-1.054 0-1.908.854-1.908 1.908 0 1.054.854 1.908 1.908 1.908 1.054 0 1.908-.854 1.908-1.908Zm7.394 3.045c0-1.082-.878-1.96-1.959-1.96-1.082 0-1.96.878-1.96 1.96 0 1.081.878 1.959 1.96 1.959 1.081 0 1.959-.878 1.959-1.959Z"
      />
      <path
        fill="#FDFFFE"
        d="m70.181 70.667.272-3.222c.013-.175.247-.22.33-.065l1.496 2.864c.054.104-.004.231-.121.251l-1.771.358c-.113.024-.216-.069-.206-.186Zm19.641-.33 1.304-2.765c.072-.144.288-.11.305.052l.337 3.04c.011.106-.082.192-.189.175l-1.64-.275c-.103-.017-.165-.131-.117-.227Z"
      />
      <path
        fill="#E78C0B"
        d="M138.57 94.444c.897 1.909 2.627 4.308 2.881 6.271-.1-.041-1.891.596-2.108 1.016-2.056 3.971-3.631 8.108-4.728 12.41-.027.117-.179.148-.251.051-.444-.608-.694-1.224-.746-1.843-.065-1.152-.182-2.276-.351-3.377-.106-.687-.096-1.279.038-1.774.306-1.145.701-2.263 1.186-3.349 1.242-2.772 2.6-5.416 3.659-8.239.065-.168.093-.368.082-.595-.024-.471.09-.66.338-.571Zm-115.193.303c.34-.054.563.066.667.365.87 2.541 1.894 4.807 3.081 6.791.68 1.138 1.134 1.943 1.358 2.417.612 1.283.932 2.153.959 2.61.072 1.166.172 2.377.306 3.632l-1.392 4.521c-.114.372-.214.368-.299-.013-.671-2.985-1.555-5.994-2.655-9.03-.657-1.812-2.829-3.444-4.383-6.199.2-1.392 1.694-3.525 2.358-5.094Z"
      />
      <path
        fill="#FCBF35"
        d="M95.193 149.28c-.326.354-.594.722-.808 1.101-.295.526-.55.897-.76 1.107-1.468 1.465-3.476 1.994-5.684 2.022-3.703.044-7.503.079-11.406.1-.986.006-2.008-.025-3.06-.097-2.627-.179-5.35-.519-7.159-1.699-.829-.539-1.651-1.155-2.462-1.846-.113-.093-.254-.148-.402-.151l-.489-.018c-.079-.165-.11-.299-.089-.405.027-.145.155-.248.303-.248l32.016.134Z"
      />
      <path
        fill="#E78C0B"
        d="m95.193 149.28 3.484.035c.378.003.526.189.443.557-.474 2.107-1.716 3.693-3.72 4.752-2.541 1.337-5.396 2.09-8.566 2.252-2.905.148-6.451.179-10.629.09-2.953-.062-5.611-.575-7.977-1.541-2.19-.891-5.189-3.091-5.265-5.626l.489.018c.148.003.289.058.402.151.811.691 1.633 1.307 2.462 1.846 1.809 1.18 4.532 1.52 7.159 1.699 1.052.072 2.074.103 3.06.097 3.903-.021 7.703-.056 11.406-.1 2.208-.028 4.216-.557 5.684-2.022.21-.21.465-.581.76-1.107.214-.379.482-.747.808-1.101Zm17.101-14.689c.962 1.117 1.234 2.352.818 3.703-.911 2.94-3.573 3.593-6.399 3.583-9.006-.028-18.232-.059-27.678-.096-7.626-.028-15.26.058-22.87.055-2.146 0-3.672-.189-4.576-.568-1.665-.691-2.679-2.032-3.04-4.023l.516-.33c.085-.055.199-.041.268.031 1.135 1.166 2.637 1.747 4.508 1.737 3.504-.018 6.86-.025 10.061-.014 13.407.038 26.904.031 40.489-.017 1.823-.007 4.254.196 5.729-.798 1.042-.702 1.764-1.788 2.174-3.263Z"
      />
      <path
        fill="#FCBF35"
        d="M112.294 134.591c-.41 1.475-1.132 2.561-2.174 3.263-1.475.994-3.906.791-5.729.798-13.585.048-27.082.055-40.489.017-3.201-.011-6.557-.004-10.061.014-1.871.01-3.373-.571-4.508-1.737-.069-.072-.183-.086-.268-.031l-.516.33c.058-1.22.44-2.115 1.141-2.678.444-.358 1.149-.547 2.112-.564 1.908-.035 3.823-.045 5.739-.035 10.759.073 21.763.076 33.014.011 8.235-.045 15.054-.028 20.456.058.512.01.942.192 1.283.554Z"
      />
      <path
        fill="#E78C0B"
        d="M119.236 123.023c.244 1.2-.055 2.256-.891 3.16-.608.657-1.475.991-2.606.994-23.152.107-46.308.127-69.46.058-2.162-.003-3.435-1.138-3.817-3.4.609-.045 1.221-.014 1.844.089.849.144 1.454.22 1.815.227 1.523.031 3.012.052 4.46.055 21.605.076 43.206.055 64.807-.062.746-.003 1.606-.089 2.583-.254.722-.121 1.145-.409 1.265-.867Z"
      />
      <path
        fill="#FCBF35"
        d="M119.236 123.023c-.12.458-.543.746-1.265.867-.977.165-1.837.251-2.583.254-21.601.117-43.202.138-64.807.062-1.448-.003-2.937-.024-4.46-.055-.361-.007-.966-.083-1.815-.227-.623-.103-1.235-.134-1.844-.089-.048-.63.114-1.29.482-1.981.901-1.681 2.018-2.263 4.013-2.276 22.804-.172 45.619-.062 68.424-.024 2.101.003 3.384 1.158 3.855 3.469Z"
      />
      <path
        fill="#E78C0B"
        d="M115.859 109.08c.186 1.918-.842 3.737-2.84 3.727-21.023-.103-42.143-.107-63.356-.01-2.063.01-3.504-.905-3.655-3.146.663-.21 1.358-.296 2.09-.255.495.024.946.041 1.355.045 5.457.038 10.918-.086 16.254-.045 10.014.083 19.927.086 29.744.007 5.708-.045 11.918.083 17.451-.024.815-.017 1.798-.117 2.957-.299Z"
      />
      <path
        fill="#FCBF35"
        d="M115.859 109.08c-1.159.182-2.142.282-2.957.299-5.533.107-11.743-.021-17.451.024-9.817.079-19.73.076-29.744-.007-5.336-.041-10.797.083-16.254.045-.409-.004-.86-.021-1.355-.045-.732-.041-1.427.045-2.09.255.03-2.645 2.19-4.536 4.742-4.646.99-.045 3.053-.058 6.189-.045 16.859.072 33.451.059 49.774-.034 3.356-.017 8.331-.378 9.146 4.154Z"
      />
      <path
        fill="#E78C0B"
        d="M109.254 94.772c.113 1.024-.148 1.922-.784 2.696-.072.092-.165.151-.279.182-.399.106-.804.161-1.22.158-10.43-.041-20.862.055-31.292-.031-10.185-.082-16.89-.058-20.115.072-2.112.083-3.15-.942-3.119-3.07l56.809-.007Z"
      />
      <path
        fill="#FCBF35"
        d="m109.254 94.772-56.809.007c.508-2.318 1.922-3.762 4.24-4.333.608-.148 2.066-.224 4.38-.22 12.176.017 23.813.021 34.902.003 1.685-.003 3.428.011 5.234.042 2.3.034 3.871.234 4.721.598 1.619.691 2.73 1.994 3.332 3.903Z"
      />
      <path
        fill="#E78C0B"
        d="M94.746 78.562c1.754.953 3.016 2.497 3.786 4.639.035.099-.038.203-.141.203-.794.003-1.602.013-2.424.024-9.508.134-19.308.179-29.4.127-.98-.003-1.936-.021-2.861-.052-.165-.007-.278-.161-.234-.319.193-.678.499-1.262.922-1.754-.031.055-.028.107.014.158.065.079.13.079.203.007.532-.574 1.169-.86 1.901-.86 7.878.007 16.01.011 24.4.014.636 0 1.262-.144 1.871-.433.485-.231 1.142-.815 1.963-1.754Z"
      />
      <path
        fill="#FCBF35"
        d="M94.746 78.562c-.821.939-1.478 1.523-1.963 1.754-.609.289-1.235.433-1.871.433-8.39-.003-16.522-.007-24.4-.014-.732 0-1.369.286-1.901.86-.073.072-.138.072-.203-.007-.042-.051-.045-.103-.014-.158 2.912-3.831 6.884-5.148 11.536-5.227 2.878-.051 5.712-.082 8.5-.089 3.646-.014 7.139.385 10.316 2.448Z"
      />
      <path
        fill="#131C17"
        d="M125.272 157.956c-.046 1.038-.971 1.839-2.068 1.793-1.097-.046-1.95-.927-1.903-1.966.046-1.038.971-1.839 2.068-1.792 1.097.046 1.95.926 1.903 1.965Zm-83.59-8.964c0 1.065-.867 1.932-1.933 1.932s-1.932-.867-1.932-1.932c0-1.066.866-1.933 1.932-1.933 1.066 0 1.933.867 1.933 1.933Zm79.765 1.858c-.217 1.061-1.296 1.738-2.413 1.51-1.115-.229-1.847-1.271-1.63-2.332.216-1.061 1.296-1.738 2.412-1.51 1.115.229 1.848 1.271 1.631 2.332Zm-73.749 2.349c0 1.055-.893 1.907-1.948 1.907-1.056 0-1.909-.988-1.909-2.043 0-1.056.853-1.909 1.909-1.909 1.055 0 1.948.989 1.948 2.045Zm69.695 4.637c-.124 1.058-1.118 1.811-2.219 1.682-1.103-.128-1.894-1.091-1.77-2.151.124-1.058 1.118-1.811 2.22-1.681 1.102.127 1.893 1.09 1.769 2.15Zm-76.543.928c0 1.052-.853 1.905-1.905 1.905-1.053 0-1.905-.853-1.905-1.905s.852-1.905 1.905-1.905c1.052 0 1.905.853 1.905 1.905Zm7.382 3.04c0 1.079-.876 2.113-1.956 2.113s-1.957-1.034-1.957-2.113c0-1.08.877-1.957 1.957-1.957s1.956.877 1.956 1.957ZM41.94 95.865c0 1.094-.887 1.981-1.981 1.981-1.093 0-1.981-.887-1.981-1.981 0-1.093.888-1.98 1.981-1.98 1.094 0 1.981.887 1.981 1.98Zm80.622-.549c.484.931.095 2.093-.869 2.597-.965.504-2.141.153-2.626-.777-.484-.93-.096-2.093.87-2.596.963-.504 2.139-.153 2.625.776Zm-77.38-6.85c-.753.725-1.977.673-2.739-.114-.761-.788-.768-2.015-.018-2.741.753-.725 1.977-.674 2.739.113.761.788.768 2.016.018 2.742Zm80.371-1.325c0 1.142-.925 2.067-2.067 2.067-1.142 0-2.067-.925-2.067-2.067 0-1.141.925-2.066 2.067-2.066 1.142 0 2.067.925 2.067 2.066Zm-87.084-.313c-.043 1.036-.955 1.837-2.037 1.79-1.081-.046-1.923-.919-1.88-1.954.043-1.036.954-1.837 2.037-1.79 1.08.046 1.923.919 1.88 1.954Zm77.63-7.051c-.274 1.096-1.409 1.756-2.54 1.475-1.128-.283-1.823-1.397-1.55-2.495.274-1.096 1.409-1.756 2.54-1.475 1.128.283 1.823 1.397 1.55 2.495Z"
      />
      <path
        fill="currentColor"
        d="M621.838 119.269v-17.425h12.58v24.14q-4.845 3.655-11.22 5.61-6.375 1.955-12.835 1.955-9.265 0-16.66-3.952-7.395-3.953-11.603-10.965-4.207-7.013-4.207-15.853t4.207-15.852q4.208-7.013 11.688-10.965 7.48-3.953 16.83-3.953 7.82 0 14.195 2.635t10.71 7.65l-8.84 8.16q-6.375-6.715-15.385-6.715-5.695 0-10.115 2.38t-6.885 6.715q-2.465 4.335-2.465 9.945 0 5.525 2.465 9.86 2.465 4.335 6.842 6.758 4.378 2.422 9.988 2.422 5.95 0 10.71-2.55Zm42.84-33.15q10.625 0 16.32 5.058 5.695 5.057 5.695 15.257v26.095h-12.41v-5.695q-3.74 6.375-13.94 6.375-5.27 0-9.138-1.785-3.867-1.785-5.907-4.93-2.04-3.145-2.04-7.14 0-6.375 4.802-10.03 4.803-3.655 14.833-3.655h10.54q0-4.335-2.635-6.672-2.635-2.338-7.905-2.338-3.655 0-7.183 1.148-3.527 1.147-5.992 3.102l-4.76-9.265q3.74-2.635 8.967-4.08 5.228-1.445 10.753-1.445Zm-1.02 38.165q3.4 0 6.035-1.572 2.635-1.573 3.74-4.633v-4.675h-9.095q-8.16 0-8.16 5.355 0 2.55 1.997 4.038 1.998 1.487 5.483 1.487Zm47.685-31.45q2.38-3.315 6.417-5.015 4.038-1.7 9.308-1.7v12.24q-2.21-.17-2.975-.17-5.695 0-8.925 3.188-3.23 3.187-3.23 9.562v21.59h-13.26v-45.73h12.665v6.035Zm36.295 0q2.38-3.315 6.417-5.015 4.038-1.7 9.308-1.7v12.24q-2.21-.17-2.975-.17-5.695 0-8.925 3.188-3.23 3.187-3.23 9.562v21.59h-13.26v-45.73h12.665v6.035Zm41.82-6.715q10.625 0 16.32 5.058 5.695 5.057 5.695 15.257v26.095h-12.41v-5.695q-3.74 6.375-13.94 6.375-5.27 0-9.138-1.785-3.867-1.785-5.907-4.93-2.04-3.145-2.04-7.14 0-6.375 4.802-10.03 4.803-3.655 14.833-3.655h10.54q0-4.335-2.635-6.672-2.635-2.338-7.905-2.338-3.655 0-7.183 1.148-3.527 1.147-5.992 3.102l-4.76-9.265q3.74-2.635 8.967-4.08 5.228-1.445 10.753-1.445Zm-1.02 38.165q3.4 0 6.035-1.572 2.635-1.573 3.74-4.633v-4.675h-9.095q-8.16 0-8.16 5.355 0 2.55 1.997 4.038 1.998 1.487 5.483 1.487Zm62.05-38.165q6.375 0 11.602 2.933 5.228 2.932 8.203 8.245 2.975 5.312 2.975 12.367 0 7.055-2.975 12.368-2.975 5.312-8.203 8.245-5.227 2.932-11.602 2.932-8.755 0-13.77-5.525v21.335h-13.26v-62.22h12.665v5.27q4.93-5.95 14.365-5.95Zm-2.295 36.21q5.1 0 8.372-3.442 3.273-3.443 3.273-9.223 0-5.78-3.273-9.222-3.272-3.443-8.372-3.443t-8.373 3.443q-3.272 3.442-3.272 9.222 0 5.78 3.272 9.223 3.273 3.442 8.373 3.442Zm51.595-36.21q10.625 0 16.32 5.058 5.695 5.057 5.695 15.257v26.095h-12.41v-5.695q-3.74 6.375-13.94 6.375-5.27 0-9.138-1.785-3.867-1.785-5.907-4.93-2.04-3.145-2.04-7.14 0-6.375 4.802-10.03 4.803-3.655 14.833-3.655h10.54q0-4.335-2.635-6.672-2.635-2.338-7.905-2.338-3.655 0-7.183 1.148-3.527 1.147-5.992 3.102l-4.76-9.265q3.74-2.635 8.967-4.08 5.228-1.445 10.753-1.445Zm-1.02 38.165q3.4 0 6.035-1.572 2.635-1.573 3.74-4.633v-4.675h-9.095q-8.16 0-8.16 5.355 0 2.55 1.997 4.038 1.998 1.487 5.483 1.487Zm60.945-3.315 3.57 9.35q-1.955 1.445-4.803 2.168-2.847.722-5.992.722-8.16 0-12.623-4.165-4.462-4.165-4.462-12.24V98.019h-7.055v-10.2h7.055V76.684h13.26v11.135h11.39v10.2h-11.39v18.615q0 2.89 1.487 4.463 1.488 1.572 4.208 1.572 3.145 0 5.355-1.7Zm31.365 12.24q-7.225 0-12.963-3.017-5.737-3.018-8.967-8.373-3.23-5.355-3.23-12.155 0-6.8 3.23-12.155 3.23-5.355 8.967-8.372 5.738-3.018 12.963-3.018 7.225 0 12.92 3.018 5.695 3.017 8.925 8.372 3.23 5.355 3.23 12.155 0 6.8-3.23 12.155-3.23 5.355-8.925 8.373-5.695 3.017-12.92 3.017Zm0-10.88q5.1 0 8.372-3.442 3.273-3.443 3.273-9.223 0-5.78-3.273-9.222-3.272-3.443-8.372-3.443t-8.415 3.443q-3.315 3.442-3.315 9.222 0 5.78 3.315 9.223 3.315 3.442 8.415 3.442Zm-502.435-.85h32.385v11.05h-46.07v-59.5h44.965v11.05h-31.28v12.92h27.625v10.71h-27.625v13.77Zm42.415 11.05v-63.07h13.26v63.07h-13.26Zm-297.84 0h-12.92l-.085-35.7-17.51 29.41h-6.205l-17.425-28.645v34.935h-12.92v-59.5h11.39l22.27 36.975 21.93-36.975h11.305l.17 59.5Zm13.175 0v-45.73h13.26v45.73h-13.26Zm6.63-52.105q-3.655 0-5.95-2.125-2.295-2.125-2.295-5.27 0-3.145 2.295-5.27 2.295-2.125 5.95-2.125 3.655 0 5.95 2.04 2.295 2.04 2.295 5.1 0 3.315-2.295 5.483-2.295 2.167-5.95 2.167Zm63.75 29.41q0 .255-.255 3.57h-34.595q.935 4.25 4.42 6.715t8.67 2.465q3.57 0 6.332-1.062 2.763-1.063 5.143-3.358l7.055 7.65q-6.46 7.395-18.87 7.395-7.735 0-13.685-3.017-5.95-3.018-9.18-8.373-3.23-5.355-3.23-12.155 0-6.715 3.187-12.112 3.188-5.398 8.755-8.415 5.568-3.018 12.453-3.018 6.715 0 12.155 2.89 5.44 2.89 8.542 8.288 3.103 5.397 3.103 12.537Zm-23.715-13.685q-4.505 0-7.565 2.55-3.06 2.55-3.74 6.97h22.525q-.68-4.335-3.74-6.927-3.06-2.593-7.48-2.593Zm32.555 36.38v-63.07h13.26v63.07h-13.26Zm70.38-22.695q0 .255-.255 3.57h-34.595q.935 4.25 4.42 6.715t8.67 2.465q3.57 0 6.332-1.062 2.763-1.063 5.143-3.358l7.055 7.65q-6.46 7.395-18.87 7.395-7.735 0-13.685-3.017-5.95-3.018-9.18-8.373-3.23-5.355-3.23-12.155 0-6.715 3.187-12.112 3.188-5.398 8.755-8.415 5.568-3.018 12.453-3.018 6.715 0 12.155 2.89 5.44 2.89 8.542 8.288 3.103 5.397 3.103 12.537Zm-23.715-13.685q-4.505 0-7.565 2.55-3.06 2.55-3.74 6.97h22.525q-.68-4.335-3.74-6.927-3.06-2.593-7.48-2.593Zm47.94 37.06q-5.695 0-11.135-1.402-5.44-1.403-8.67-3.528l4.42-9.52q3.06 1.955 7.395 3.188 4.335 1.232 8.5 1.232 8.415 0 8.415-4.165 0-1.955-2.295-2.805-2.295-.85-7.055-1.445-5.61-.85-9.265-1.955-3.655-1.105-6.333-3.91-2.677-2.805-2.677-7.99 0-4.335 2.507-7.692 2.508-3.358 7.31-5.228 4.803-1.87 11.348-1.87 4.845 0 9.647 1.063 4.803 1.062 7.948 2.932l-4.42 9.435q-6.035-3.4-13.175-3.4-4.25 0-6.375 1.19t-2.125 3.06q0 2.125 2.295 2.975 2.295.85 7.31 1.615 5.61.935 9.18 1.998 3.57 1.062 6.205 3.867 2.635 2.805 2.635 7.82 0 4.25-2.55 7.565-2.55 3.315-7.438 5.143-4.887 1.827-11.602 1.827Z"
      />
    </svg>
  )
}
