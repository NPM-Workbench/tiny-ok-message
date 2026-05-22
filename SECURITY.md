## Security Policy

**Open Source Notice**<br/>

`tiny-ok-message` is an open source npm package. Its source code is publicly available for review, audit, contribution, and responsible improvement under the license included in this repository.

This package is intended to be a small test package for checking whether npm packages can be published, installed, built, and imported correctly in consuming projects. It is not designed, published, or maintained for malicious, deceptive, surveillance, credential-harvesting, tracking, or unauthorized activity.

**Data Collection and Privacy**<br/>

This package does not intentionally collect, store, retain, analyze, sell, rent, trade, monetize, or process personal data for its own purposes. It does not include any hidden mechanism for gathering information about users, devices, applications, browsing activity, usage patterns, or application data.

The package is designed to perform only its documented functionality. Any data it handles is limited to the `message` value explicitly provided by the consuming application when calling the package's exported function. This package does not independently decide what data to collect, does not create user profiles, does not persist user information, and does not transmit data to any project-owned, maintainer-controlled, analytics, monitoring, advertising, or tracking service.

In particular, this project does not:

- collect personal information from users;
- collect credentials, passwords, authentication tokens, payment details, or private application data;
- include analytics, fingerprinting, telemetry, advertising, or behavioral tracking code;
- send data to a project-owned or maintainer-controlled server;
- use hidden background services for data collection;
- sell, disclose, or transfer user data to third parties for monetary benefit;
- collect data for malicious, deceptive, surveillance, or unauthorized purposes.

**Network Behavior**<br/>

This package may make HTTP requests only as part of its documented test-helper behavior. Those requests are intended to communicate with the public DummyJSON HTTP endpoint:

```text
https://dummyjson.com/http/200/<message>
```

The `message` value passed by the consuming application is URL-encoded and included in that request path. This package does not secretly contact unrelated domains, exfiltrate application data, or perform hidden network activity outside its documented purpose.

Application developers are responsible for reviewing how they use the package, what message values they pass into it, and whether their usage complies with their own privacy, security, legal, and operational requirements.

**Security Expectations for Consumers**<br/>

Consumers should treat this package like any other third-party dependency and review it before use in production environments.

Recommended practices:

- install packages from trusted registries and verified sources;
- pin or review dependency versions where appropriate;
- avoid passing sensitive data into the `message` value;
- review network behavior when using the package in sensitive applications;
- keep the package updated when fixes or improvements are released.

**Reporting a Vulnerability**<br/>

If you discover a vulnerability, privacy issue, malicious behavior, dependency risk, or other security concern, please report it responsibly.<br/>
Preferred reporting methods:

- Open a GitHub security advisory for this repository, if available.
- If private advisories are not available, open a GitHub issue with a clear description.
- Avoid publishing exploit details that could put users at risk before maintainers have had a reasonable opportunity to review the issue.

Please include:

- affected package name and version;
- description of the issue;
- steps to reproduce, if applicable;
- potential impact;
- suggested mitigation or patch, if known.

The maintainer(s) will make a reasonable effort to review valid reports, investigate impact, and publish a fix or guidance when appropriate.

**Supported Versions**<br/>

Security updates are generally expected to apply to the latest published version of the package. Users are encouraged to upgrade to the latest version when fixes or improvements are released.

**No Warranty**<br/>

This project is provided as open source software under the repository license and without warranty of any kind. Users and application developers are responsible for evaluating whether this package is suitable for their own security, privacy, compliance, and operational requirements.
